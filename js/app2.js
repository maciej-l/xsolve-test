// APKI Key - 64b0f57dd2e44132b7f1f45b095747ec
// Config data
	var newsSources = {
		technology: {
			category: 'technology',
			selectId: '#tech-sources'
		},
		business: {
			category: 'business',
			selectId: '#biz-sources'
		},
		science: {
			category: 'science-and-nature',
			selectId: '#sci-sources'
		},
		sport: {
			category: 'sport',
			selectId: '#spo-sources'
		}
	};

// Get articles sources to load them into selects
	var getArticlesSources = function() {
		$.each(newsSources, function(index, value){
			$.ajax({
				url: `https://newsapi.org/v1/sources?category=${value.category}`,
				dataType: 'json',
				type: 'get'
			}).done(function(response) {
				loadDataToSelect(response, value.selectId);
				//firstRandomLoad(response);
			}).fail(function(error) {
				console.log(error);
			});
		});
	};
// Inserting data - sources - to selects
	var loadDataToSelect = function(resp, selectId) {
		var option = $(`${selectId}`).children();
		$.each(resp.sources, function(index, value){
			var newOption = $('<option>');
				newOption
					.attr('value', value.id)
					.text(value.name)
					.insertAfter(option);
		});
	};
// Geting data from selected source or articles
	var getSelectedSourceArticles = function(selectedSource, ele) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${selectedSource}&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			insertArticles(response, ele);
			console.log(response);
		}).fail(function(error) {
			console.log(error);
		});
	};
// Show articles in page
	var insertArticles = function(response, ele) {
		var articleDate, articleAut;
		response.articles.forEach(function(element, index) {
			if (element.publishedAt !== null) {
					articleDate = element.publishedAt.substr(0, 10);
				} else {
					articleDate = "---";
				}
			if (element.author === null || element.author === "") {
				articleAut = "---";
			} else {
				articleAut = element.author;
			}
			var singleArtDiv = $('<div class="single-article">'),
				linkToArticle = $(`<a class="article-link" href="${element.url}">`),
				newArticle = $('<article>'),
				articleImg = $(`<div class="article-img"><img src=${element.urlToImage}></div>`),
				articleTitle = $(`<div class="article-title"><h1>${element.title}</h1></div>`),
				aritcleDesc = $(`<div class="article-desc"><p>${element.description}</p></div>`),
				articleAuthor = $(`<div class="article-aut"></div>`),
				articleAuthorAndDate = $(`<p>Author: ${articleAut}</p><p>Date: ${articleDate}</p>`);

					articleImg.appendTo(linkToArticle);
					articleTitle.appendTo(linkToArticle);
					aritcleDesc.appendTo(linkToArticle);
					articleAuthor.html(articleAuthorAndDate);
					articleAuthor.appendTo(linkToArticle);
					linkToArticle.appendTo(newArticle);
					newArticle.appendTo(singleArtDiv);
					singleArtDiv.appendTo(ele);
		});
	};
// random first load of articles
	var firstRandomLoad = function(resp){

		//console.log(resp);
	};
// +++ +++ +++ +++
$(function(){
	var config = {
		select: $("section").find("select")
	};

// Loading the selected source of articles
	config.select.each(function(index, value){
		$(this).on('change', function(event){
			var selectedSourceVal = $(event.currentTarget).val();
				toInsert = $(event.currentTarget).siblings('.section-content');
				toInsert.empty();
				getSelectedSourceArticles(selectedSourceVal, toInsert);
		});
	});
	getArticlesSources();
});