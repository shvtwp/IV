FROM frolvlad/alpine-glibc:alpine-3.18

WORKDIR /

RUN apk update && \
    apk upgrade

RUN apk add curl

RUN adduser -D -u 1000 usuario

USER usuario

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/home/usuario/.deno"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"

LABEL maintainer="shvtwp"

COPY ./drakefile.ts .

WORKDIR /app

ENTRYPOINT ["deno", "run", "-A", "drakefile.ts", "testHorario"]