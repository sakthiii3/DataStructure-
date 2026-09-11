FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN wget -O /usr/local/bin/ttyd https://github.com/tsl0922/ttyd/releases/download/1.7.3/ttyd.x86_64 && \
    chmod +x /usr/local/bin/ttyd

WORKDIR /app
COPY . .

RUN mkdir build && cd build && cmake .. && make

ENV PORT=8080
EXPOSE 8080

CMD ttyd -p $PORT ./build/data_structures
