# Capa 1: Capa de construcción
FROM ubuntu:latest AS builder

WORKDIR /app

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y curl unzip \
    && useradd -m -u 1000 usuario \
    && mkdir -p /.cache \
    && chmod -R 777 /.cache

USER usuario

RUN curl -fsSL https://deno.land/x/install/install.sh | sh \
    && export DENO_INSTALL="/home/usuario/.deno" \
    && export PATH="$DENO_INSTALL/bin:$PATH"

# Capa 2: Final
FROM ubuntu:latest

RUN useradd -m -u 1000 usuario

COPY --from=builder /home/usuario/.deno /home/usuario/.deno
COPY --from=builder /.cache /.cache
COPY --from=builder /app /app

USER usuario

ENV PATH="/home/usuario/.deno/bin:${PATH}"

LABEL maintainer="shvtwp" \
      version="5.0.2"

WORKDIR /app/test

COPY ./drakefile.ts ./deno.json ./deno.lock ./

ENTRYPOINT ["deno", "run", "-A", "drakefile.ts", "test"]
