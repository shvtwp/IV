FROM frolvlad/alpine-glibc:alpine-3.18_glibc-2.34

WORKDIR /

RUN apk update && apk upgrade && \
    apk add curl && adduser -D -u 1000 usuario

USER usuario

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH="/home/usuario/.deno/bin:${PATH}"

LABEL maintainer="shvtwp" \
      version="5.0.2"

COPY ./drakefile.ts ./deno.json ./

WORKDIR /app

ENTRYPOINT ["deno", "run", "-A", "drakefile.ts", "testHorario"]