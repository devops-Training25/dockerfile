FROM ubuntu:22.04

# Set non-interactive mode for apt
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt install -y vsftpd ftp && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

COPY  vsftpd.conf  /etc/vsftpd.conf

# Create FTP user and home directory
RUN useradd -m ftpuser && \
    echo "ftpuser:password" | chpassword && \
    mkdir -p /home/ftpuser/ftp/files && \
    chown nobosy:nogroup /home/ftpuser/ftp && \
    chmod a-w /home/ftpuser/ftp && \
    chmod ftpuser:ftpuser /homr/ftpuser/ftp/files

# Expose FTP ports
EXPOSE 20 21 21100-21110

# Start vsftpd
CMD ["/usr/sbin/vsftpd", "/etc/vsftpd.conf"]
