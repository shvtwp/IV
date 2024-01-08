FROM debian:12-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y curl unzip \
    && useradd -m -u 1000 usuario 

USER usuario

RUN curl -fsSL https://deno.land/x/install/install.sh | sh \
    && export DENO_INSTALL="/home/usuario/.deno" \
    && export PATH="$DENO_INSTALL/bin:$PATH"

ENV PATH="/home/usuario/.deno/bin:${PATH}"

LABEL maintainer="shvtwp" \
      version="5.0.2"

WORKDIR /app/test

ENTRYPOINT ["deno", "run", "-A", "drakefile.ts", "test"]