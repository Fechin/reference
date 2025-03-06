---
title: Alpine Linux
date: 2024-03-20 12:00:00
icon: icon-alpine
background: bg-blue-600
tags:
    - linux
    - server
    - container
categories:
    - Operating System
intro: A comprehensive cheatsheet for Alpine Linux, covering package management, system administration, networking, and more. Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.
---

# Alpine Linux Cheatsheet

## Package Management (apk)

### Basic Package Operations
```bash
# Update package index
apk update

# Upgrade all installed packages
apk upgrade

# Install a package
apk add <package-name>

# Remove a package
apk del <package-name>

# Search for a package
apk search <package-name>

# Show package info
apk info <package-name>

# List all installed packages
apk list --installed
```

### Advanced Package Operations
```bash
# Add package from testing repository
apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing <package-name>

# Add multiple packages
apk add package1 package2 package3

# Clean package cache
apk cache clean
```

## System Administration

### Service Management (OpenRC)
```bash
# Start a service
rc-service <service-name> start

# Stop a service
rc-service <service-name> stop

# Restart a service
rc-service <service-name> restart

# Add service to default runlevel
rc-update add <service-name> default

# Remove service from default runlevel
rc-update del <service-name> default

# List all services
rc-status
```

### System Information
```bash
# Show system information
uname -a

# Show disk usage
df -h

# Show memory usage
free -h

# Show running processes
ps aux

# Show system uptime
uptime
```

### Network Configuration
```bash
# Show network interfaces
ip addr show

# Configure network interface
setup-interfaces

# Test network connectivity
ping -c 4 google.com

# Show routing table
ip route show

# Edit network configuration
vi /etc/network/interfaces
```

### User Management
```bash
# Add a new user
adduser <username>

# Add user to group
addgroup <username> <groupname>

# Change password
passwd <username>

# Delete user
deluser <username>

# List all users
cat /etc/passwd
```

## File System Operations

### Basic File Operations
```bash
# Create directory
mkdir <directory-name>

# Remove directory
rm -r <directory-name>

# Copy files
cp <source> <destination>

# Move/rename files
mv <source> <destination>

# Change permissions
chmod <permissions> <file>

# Change ownership
chown <user>:<group> <file>
```

## Container Operations

### Docker Support
```bash
# Install Docker
apk add docker

# Start Docker service
rc-service docker start

# Enable Docker at boot
rc-update add docker default
```

## System Maintenance

### Disk Operations
```bash
# Check disk space
df -h

# Check directory size
du -sh <directory>

# Mount a device
mount /dev/<device> /mnt/<mountpoint>

# Unmount a device
umount /mnt/<mountpoint>
```

### Backup and Restore
```bash
# Create tar archive
tar -czf backup.tar.gz /path/to/backup

# Extract tar archive
tar -xzf backup.tar.gz

# Create system backup (root required)
lbu package /media/backup.apkovl.tar.gz
```

## Tips and Tricks

### Common Configuration Files
- `/etc/apk/repositories` - Package repositories
- `/etc/network/interfaces` - Network configuration
- `/etc/hostname` - System hostname
- `/etc/hosts` - Host mappings
- `/etc/resolv.conf` - DNS configuration

### Environment Variables
```bash
# Set environment variable
export VARIABLE=value

# View all environment variables
env

# Add permanent environment variable
echo "export VARIABLE=value" >> ~/.profile
```

### System Logs
```bash
# View system logs
less /var/log/messages

# View boot messages
dmesg

# Follow log in real-time
tail -f /var/log/messages
```

## Security

### Firewall (using iptables)
```bash
# Install iptables
apk add iptables

# Allow SSH (port 22)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Save iptables rules
/etc/init.d/iptables save

# Restore iptables rules
/etc/init.d/iptables restart
```

### SSH Configuration
```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096

# Copy SSH key to remote server
ssh-copy-id user@remote-server

# Edit SSH configuration
vi /etc/ssh/sshd_config
```

## Troubleshooting

### Common Commands
```bash
# Check system logs for errors
dmesg | grep -i error

# Check service status
rc-service <service-name> status

# Check system resource usage
top

# Check network connections
netstat -tuln

# Check disk health
smartctl -a /dev/sda  # Requires smartmontools package
``` 