ARG DENO_VERSION=1.39.2

FROM denoland/deno:bin-$DENO_VERSION AS deno
FROM ubuntu:latest

LABEL maintainer="shvtwp"

COPY --from=deno /deno /usr/local/bin/deno

WORKDIR /app/test

ENTRYPOINT ["deno", "test", "--allow-read", "test/horario_test.ts"]