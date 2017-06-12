// +++ +++ API URL and API KEY +++ +++
// API KEY = 64b0f57dd2e44132b7f1f45b095747ec
var techArtId = [],
	bizArtId = [],
	sciArtId = [],
	spoArtId = [];
// +++ +++ +++ ++++ Sources config +++ +++ +++
	newsSources = [
		{
			category: 'technology',
			selectId: '#tech-sources',
			asideArtId: '#tech-side-art',
			dafaultLoad: 'techcrunch',
			firsLoadInsert: '#section-tech'
		},
		{
			category: 'business',
			selectId: '#biz-sources',
			asideArtId: '#biz-side-art',
			dafaultLoad: 'the-wall-street-journal',
			firsLoadInsert: '#section-biz'
		},
		{
			category: 'science-and-nature',
			selectId: '#sci-sources',
			asideArtId: '#sci-side-art',
			dafaultLoad: 'national-geographic',
			firsLoadInsert: '#section-sci'
		},
		{
			category: 'sport',
			selectId: '#spo-sources',
			asideArtId: '#spo-side-art',
			dafaultLoad: 'bbc-sport',
			firsLoadInsert: '#section-spo'
		}
	];

// +++ Promise for tech articles
	function getTechArticles() {
		var promisTechArticles = new Promise(function(resolve, reject){
			$.ajax({
				url: `https://newsapi.org/v1/sources?category=${newsSources[0].category}`,
				dataType: 'json',
				type: 'get'
			}).done(function(data){
				resolve(data);
			}).fail(function(error){
				reject(error);
			});
		});
		return promisTechArticles;
	}
// +++ Promise for biz articles
	function getBizArticles() {
		var promisBizArticles = new Promise(function(resolve, reject){
			$.ajax({
				url: `https://newsapi.org/v1/sources?category=${newsSources[1].category}`,
				dataType: 'json',
				type: 'get'
			}).done(function(data){
				resolve(data);
			}).fail(function(error){
				reject(error);
			});
		});
		return promisBizArticles;
	}
// +++ Promise for Sci articles
	function getSciArticles() {
		var promisSciArticles = new Promise(function(resolve, reject){
			$.ajax({
				url: `https://newsapi.org/v1/sources?category=${newsSources[2].category}`,
				dataType: 'json',
				type: 'get'
			}).done(function(data){
				resolve(data);
			}).fail(function(error){
				reject(error);
			});
		});
		return promisSciArticles;
	}
// +++ Promise for Spo articles
	function getSpoArticles() {
		var promisSpoArticles = new Promise(function(resolve, reject){
			$.ajax({
				url: `https://newsapi.org/v1/sources?category=${newsSources[3].category}`,
				dataType: 'json',
				type: 'get'
			}).done(function(data){
				resolve(data);
			}).fail(function(error){
				reject(error);
			});
		});
		return promisSpoArticles;
	}
// +++ getting tech data
	function getTechData(element){
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${element}&sortBy=top&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			insertDataToSideBar(response, newsSources[0].asideArtId);
		});
	}
// +++ getting biz data
	function getBizData(element){
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${element}&sortBy=top&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			insertDataToSideBar(response, newsSources[1].asideArtId);
		});
	}
// +++ getting Sci data
	function getSciData(element){
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${element}&sortBy=top&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			insertDataToSideBar(response, newsSources[2].asideArtId);
		});
	}
// +++ getting spo data
	function getSpoData(element){
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${element}&sortBy=top&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			insertDataToSideBar(response, newsSources[3].asideArtId);
		});
	}
// +++ getting artocles from Tech
	function printTechData(data) {
		var d = getTechArticles(),
			sideTechArt = $('#tech-side-art');
		d.then(function(data) {
			$.each(data.sources, function(index, val) {
				techArtId.push(val.id);
		});
		}).then(function() {
				sideTechArt.empty();
				getTechData(techArtId[0]);
		});
	}
// +++ getting artocles from Biz
	function printBizData(data) {
		var d = getBizArticles(),
			sideBizArt = $('#biz-side-art');
		d.then(function(data) {
			$.each(data.sources, function(index, val) {
				bizArtId.push(val.id);
		});
		}).then(function() {
				sideBizArt.empty();
				getBizData(bizArtId[0]);
		});
	}
// +++ getting artocles from Sci
	function printSciData(data) {
		var d = getSciArticles(),
			sideSciArt = $('#sci-side-art');
		d.then(function(data) {
			$.each(data.sources, function(index, val) {
				sciArtId.push(val.id);
		});
		}).then(function() {
				sideSciArt.empty();
				getSciData(sciArtId[0]);
		});
	}
// +++ getting artocles from Spo
	function printSpoData(data) {
		var d = getSpoArticles(),
			sideSpoArt = $('#sci-side-art');
		d.then(function(data) {
			$.each(data.sources, function(index, val) {
				spoArtId.push(val.id);
		});
		}).then(function() {
				sideSpoArt.empty();
				getSpoData(spoArtId[0]);
		});
	}
// +++ inserting Data to sidebar 
	function insertDataToSideBar(response, sourceId){
		var sideArticleSource = $(sourceId),
			sideArtLink = $(`<a class=aside-article-link" href="${response.articles[0].url}">`),
			sideArtImg = $(`<img class="aside-article-img" src="${response.articles[0].urlToImage}">`),
			sideArtTitle = $(`<h2 class="aside-article-title">${response.articles[0].title}</h2>`),
			sideArtDesc = $(`<p class="aside-article-content">${response.articles[0].description}</p>`);

			sideArtImg.appendTo(sideArtLink);
			sideArtTitle.appendTo(sideArtLink);
			sideArtDesc.appendTo(sideArtLink);
			sideArtLink.appendTo(sideArticleSource);
	}	
// +++ getting sources of articles to select
	function getSources() {
		newsSources.forEach(function(index, value) {
			$.ajax({
			url: `https://newsapi.org/v1/sources?category=${index.category}`,
			dataType: 'json',
			type: 'get'
			}).done(function(response) {
				loadDataToSelect(response, index.selectId);
			}).fail(function(error) {
				console.log(error);
			});
		});
	}
// +++ inserting data to select
	function loadDataToSelect(response, selectId) {
		var techSelect = $(`${selectId}`),
			option = $(`${selectId}`).children();
		$.each(response.sources, function(index, value) {
			var newTechOption = $('<option>');
			newTechOption
				.attr('value', value.id)
				.text(value.name)
				.insertAfter(option);
		});
	}
// +++ getting data from selected sources
	function getSelSourceArt(selectedSource, ele) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=${selectedSource}&apiKey=64b0f57dd2e44132b7f1f45b095747ec`,
			dataType: 'json',
			type: 'get'
		}).done(function(response) {
			showSelectedSource(response, ele);
		}).fail(function(error) {
			console.log(error);
		});
	}
// +++ inserting articles to page
	function showSelectedSource(response, ele) {
		if(response.articles.length > 3) {
			response.articles.forEach( function(element, index) {
			var singleArtDiv = $('<div class="single-article">'),
				linkToArticle = $(`<a class="article-link" href="${element.url}">`),
				newArticle = $('<article>'),
				articleImg = $(`<div class="article-img"><img src=${element.urlToImage}></div>`),
				articleTitle = $(`<div class="article-title"><h1>${element.title}</h1></div>`),
				aritcleDesc = $(`<div class="article-desc"><p>${element.description}</p></div>`),
				articleAuthor = $(`<div class="article-aut"></div>`),
				articleDate = "",
				articleAuthorAndDate = $(`<p>${element.author}</p><p>${articleDate}</p>`);
				
				if(!element.publishedAt == null) {
					articleDate = element.published.substr(0, 10);
				}
					articleImg.appendTo(linkToArticle);
					articleTitle.appendTo(linkToArticle);
					aritcleDesc.appendTo(linkToArticle);
					articleAuthor.html(articleAuthorAndDate);
					articleAuthor.appendTo(linkToArticle);
					linkToArticle.appendTo(newArticle);
					newArticle.appendTo(singleArtDiv);
					singleArtDiv.appendTo(ele);
			});
		}
	}
// +++ putting som stuff on start of page
	function firstLoad() {
		newsSources.forEach(function(element, index) {
			getSelSourceArt(element.dafaultLoad, element.firsLoadInsert);
		});
	}
// +++ fixed menu function
function fixedMenu(element, elementPos) {
	element.each(function() {
		if(elementPos > 50) {
			$('.header-container').addClass('sticky');
		} else {
			$('.header-container').removeClass('sticky');
		}
	});
}
$(document).scroll(function() {
	var top = $(window).scrollTop(),
		menu = $('.header');
	fixedMenu(menu, top);
});
// +++ DOM +++
$(function(){
	var footerDate = $('#f-date'),
		actualYear = new Date(),
		links = $('a[href^="#"]'),
		doc = $('html, body'),
		mobBtn = $('#mob-nav'),
		hamburgers = $('.mob-nav-1, .mob-nav-2, .mob-nav-3'),
		mainNavigation = $('.main-nav'),
		navLinks = $('.navbar-nav').find('a'),
		switchBtn = $('a[href=""]'),
		body = $('body');
// +++ Footer - get year
	footerDate.text(actualYear.getFullYear());
// +++ smoth scrolling
	links.on('click', function(e) {
		e.preventDefault();
		var linkAdr = $(this.getAttribute('href'));
		doc.animate({scrollTop: linkAdr.offset().top}, 1000);
	});
// +++ for selecting sources of articles
	var select = $('section').find('select');
	select.each(function(index, element) {
		$(this).on('change', function(event) {
			var selectedSource = $(event.currentTarget).val(),
			toInsert = $(event.currentTarget).siblings('.section-content');
			toInsert.empty();
			getSelSourceArt(selectedSource, toInsert);
		});
	});
// +++ mob nav
	mobBtn.on('click', function() {
		hamburgers.toggleClass('animate');
		mainNavigation.toggleClass('show-nav');
	});
	navLinks.click(function() {
		hamburgers.toggleClass('animate');
		mainNavigation.toggleClass('show-nav');
	});
// +++ switching ltr - rtl
	switchBtn.click(function(event) {
		event.preventDefault();
		if(!body.hasClass('rtl-direction') || body.hasClass('ltr-direction')) {
			body.addClass('rtl-direction')
				.find('h1, h2, p').css('unicode-bidi', 'bidi-override');
			body.removeClass('ltr-direction');
			switchBtn.text('Przełącz na ltr');
		} else {
			body.removeClass('rtl-direction')
				.addClass('ltr-direction');
			switchBtn.text('Przełącz na rtl');
		}
	});
// +++ functions for API
	getSources();
	firstLoad();
	printTechData();
	printBizData();
	printSciData();
	printSpoData();	
});