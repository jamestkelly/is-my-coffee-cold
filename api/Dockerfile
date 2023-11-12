ARG BASE_REGISTRY=registry.access.redhat.com
ARG BASE_BUILDER=ubi8/go-toolset
ARG BASE_RUNNER=ubi8-micro
ARG BASE_IMAGE_VERSION=latest

FROM ${BASE_REGISTRY}/${BASE_BUILDER}:${BASE_IMAGE_VERSION} AS builder

ENV HOME=/opt
USER 0
RUN yum install ca-certificates

COPY . ${HOME}/go/src/app
WORKDIR ${HOME}/go/src/app
RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o ${HOME}/go/bin/server cmd/server/main.go

FROM ${BASE_REGISTRY}/${BASE_RUNNER}:${BASE_IMAGE_VERSION} AS runner

ENV HOME=/opt

LABEL name="is-my-coffee-cold/api"
LABEL description="API Server for is-my-coffee-cold"
LABEL architecture=x86_64
LABEL maintainer="is-my-coffee-cold"
LABEL vendor="is-my-coffee-cold"

USER 0

RUN rm -f /etc/localtime && \
    ln -s /usr/share/zoneinfo/${LOCAL_TZ} /etc/localtime

COPY --from=builder ${HOME}/go/bin/server ${HOME}/bin/server

EXPOSE 3005
CMD ["opt/bin/server"]
