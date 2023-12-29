FROM denoland/deno:alpine

SHELL ["/bin/bash", "-c"]

LABEL maintainer="shvtwp"

WORKDIR /app/test

USER deno

ENTRYPOINT ["deno", "test", "--allow-read", "test/horario_test.ts"]