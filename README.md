# XSolve-test

## Założenia projektu

Aplikacja pobiera dane z rest API - https://newsapi.org/, dzięki której można genrewać listy artykułów publikowanych przez ponad 50 redakcji z całego świata, podzielonych tematycznie.

Do projektu wybrałem 4 działy, Technologia, Biznes, Sport i Nauka. Użytkownik może wybierać za pomocą pola typu select, lista dostępnych publikacji ładowana jaet za pomocą AJAX, wydawcę i otrzymuje zwrotnie listę artykułów ze zdjęciem, tytułem, opisem, jeśli jest dostęne to również z autorem i datą publikacji. Aplikacja generuje linki do tych artykułów i użytkonik po kliknięciu w "zajawkę" jest przenoszony do strony wydawcy.

Wczytywanie listy artykułów na początku, jak i przy każdym wybraniu inego wydawcy odbywa się za pomocą zapytań AJAX a tym samym stronie nie przeładowuje się. 

W panelu bocznym są wyświetlane pojedyncze artykuły z czterech kategorii. 

## Założenia zadania testowego
1. - strona posiada menu, content, aside, footer
2. - strona powstała w koncepcji mobile first, jest responsywna, posiada mobilne menu.
3. - przełączanie między trybem LTR i RTL odbywa się dynamicznie za pmocą przycisku w menu głównym strony
4. menu spełnia warunki zadania
5. tresć storny ładuje się za pmocą rest API
6. Kilka animacji zostało użytych w projekcie.

## Wykożysztane technologie
Do projektu użyto:
1. HTML 5, 
2. CSS 3,
3. jQuery - **Plik app.js - nie jest zminifikowany celowo**,
4. SASS - również dołączone do repozytorium,
5. do kompilacji SASS na CSS, do śledzenia zmian w plikach i przełodowywania strony użyto GULP.

