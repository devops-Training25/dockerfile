FROM ubuntu:22.04


RUN apt update && \
    apt install -y apache2 && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./index.html  /var/www/html/indexx.html

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
