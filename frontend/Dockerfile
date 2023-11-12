ARG BASE_REGISTRY=registry.access.redhat.com
ARG BASE_BUILDER=ubi8/nodejs-18
ARG BASE_RUNNER=ubi8/nodejs-18-minimal
ARG BASE_IMAGE_VERSION=latest

FROM ${BASE_REGISTRY}/${BASE_BUILDER}:${BASE_IMAGE_VERSION} AS builder

ENV HOME=/app
WORKDIR ${HOME}
ENV PATH ${HOME}/node_modules/.bin:$PATH

USER 0
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts -g --silent

COPY . ./
RUN npm run build

FROM ${BASE_REGISTRY}/${BASE_RUNNER}:${BASE_IMAGE_VERSION} AS runner

LABEL name="is-my-coffee-cold/app"
LABEL description="Front-end application for is-my-coffee-cold"
LABEL architecture=x86_64
LABEL maintainer="is-my-coffee-cold"
LABEL vendor="is-my-coffee-cold"

USER 0

RUN rm -f /etc/localtime && \
    ln -s /usr/share/zoneinfo/${LOCAL_TZ} /etc/localtime

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
