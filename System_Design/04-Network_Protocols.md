## Network Protocols

### Key terms
1. <strong>IP</strong> - Stands for <strong>Internet Protocols</strong>. This network protocol outlines how almost all machine-to-machine communications should happen in the world. Other protocols like <strong> TCP, UDP</strong> and <strong>HTTP</strong> are built on top of IP.

2. <strong>TCP</strong> - Network protocol built on top of the Internet Protocol(IP). Allows for ordered, reliable data delivery between machines over the public internet by creating a <strong>connection</strong>.
- TCP is usually implemented in the kernel, which exposes sockets to applications that they use to stream data through an open connection.

3. <strong>HTTP</strong> - The <strong>HyperText Transfer Protocol</strong> is a very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response.

Requests typically have the following schema:

```
host: string (example: algoexpert.io)
port: integer (example: 80 or 443)
method: string (example: GET, PUT, POST, DELETE, OPTIONS, OR PATCH)
headers: pair list (example: "Content-Type" => "application/json")
body: opaque sequence of bytes
```

Responses typically have the following schema:

```
status code: integer (example: 200, 401)
headers: pair list (example: "Content-Length" => 1238)
body: opaque sequence of bytes
```

4. <strong>IP Packet</strong> - Sometimes more broadly referred to as just a (network) packet. An IP packet is effectively the smallest unit used to describe data being sent over <strong>IP</strong>, aside from bytes.

An IP packets consists of:

- an IP Header, which contains the source and destination IP addresses as well as other info related to the Network
- a payload, which is just the data being sent over the network.

## What is a protocol?
- An agreed upon set of rules regarding interaction between two parties.
  - eg: two people who vaguely know each other run into one another and have an interaction (small talk). This differs depending on culture and how much you know the other person.

### Modern internet runs on following internet protocol.
- When a machine tries to interact to another machine and sends data, the data is sent in the form of an IP packet (fundamental unit of data that's sent from one machine to another).
- IP packets are building blocks of communication between machine over internet.
- There are other units beyond IP packets. It's also made up of bytes.
- IP packet has two main sections
  - IP header - contains where machine is coming from and where it's being sent to. Also contains version of internet protocol and size of packet.
  - Data -
