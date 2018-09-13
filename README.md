# NM

nm_b – шаблон проекта на БЭМ-стеке. 

## Установка

В командной строке необходимо выполнить следующие команды

```
git clone https://github.com/jettswill/nm_b.git --depth 1 nm_b
cd nm_b
npm install
```

## Запуск

Чтобы не писать каждый раз длинные пути до исполняемых файлов, нужно записать эти пути в глобальную переменную PATH

``` export PATH=./node_modules/.bin:$PATH ```

После установки обновлений и перед первым запуском нужно выполнить билд проекта

``` enb make ```

А чтобы увидеть всё в браузере, нужна команда

``` npm start ```

## Браузер

Далее нужно в браузере перейти по ссылке `0.0.0.0:8080/`. На ней будет список всей страниц в проекте. Изначально в проекте лежит одна строка с примерами блоков.

