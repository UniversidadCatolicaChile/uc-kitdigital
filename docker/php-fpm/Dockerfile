FROM php:7.2-fpm

WORKDIR /var/app

RUN \
    apt-get update && apt-get install -y --no-install-recommends \
        libfreetype6-dev libjpeg62-turbo-dev libsodium-dev \
	    libpng-dev libxpm-dev libvpx-dev libmemcached-dev \
        openssl unzip zip libcurl4-openssl-dev git bash curl libxml2-dev \
    && docker-php-ext-configure gd \
        --with-freetype-dir=/usr/lib/x86_64-linux-gnu/ \
        --with-jpeg-dir=/usr/lib/x86_64-linux-gnu/ \
    && docker-php-ext-install pdo pdo_mysql mysqli xml bcmath pcntl \
        opcache mbstring tokenizer ctype zip gd json 

COPY custom.ini $PHP_INI_DIR/conf.d/

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

EXPOSE 9000
