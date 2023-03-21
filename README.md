# Онлайн-сервис поиска книг с помощью Google Books API  
### https://anastasia-kot.github.io/future-test-website/

## Использованный стек/ технические требования:
+ React
+ Redux, Redux-Thunk
+ Formik 
+ Axios для взаимодействия с [Google Books API](https://developers.google.com/books/docs/v1/using "Документация Google Books API"). Сгенерирован [Google API key](https://developers.google.com/books/docs/v1/using#APIKey "https://developers.google.com/books/docs/v1/using#APIKey")
+ Адаптивность от 320px до 1920px  
+ максимально переиспользуемые компоненты (организация архитектуры, структуры приложения )  `(использован Feature-Sliced Design)`
+ обработка ошибок - некорректных данных при ошибках API-запроса   
+ Покрытие тестами `(в процессе покрытия тестами)`
+ Typescript  

## **Функционал**
+ форма для поиска - поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
+ Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
+ Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest.
+ Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
Над блоком с карточками отображается количество найденных по запросу книг.
+ Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
+ При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.
+ Во время загрузки книг показывается индикатор загрузки
+ Обработка ошибок - некорректных данных в promise.data при отрисовке, при получении

## **Макет**

![image](https://user-images.githubusercontent.com/96003382/175954085-023509eb-7b9f-424e-9fc8-a418643c727e.png)
![image](https://user-images.githubusercontent.com/96003382/175954113-d94a34b3-c3ac-43f9-b353-70f211410aa1.png)
