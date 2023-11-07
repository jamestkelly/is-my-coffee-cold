ARG BASE_IMAGE=golang
ARG BASE_IMAGE_LABEL=1.20-alpine

FROM ${BASE_IMAGE}:${BASE_IMAGE_LABEL} as builder

ENV HOME=/opt
RUN apk --no-cache add ca-certificates
USER 0

COPY . ${HOME}/go/src/app
WORKDIR ${HOME}/go/src/app
RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o ${HOME}/go/bin/server cmd/server/main.go

FROM ${BASE_IMAGE}:${BASE_IMAGE_LABEL} as runner 

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
