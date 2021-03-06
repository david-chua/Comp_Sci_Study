Client-Server model

6 key terms
1. <strong>Client</strong> - a machine or process that requests data or service from a server.
- Note: a single machine or software can be both a client and server at the same time. For instance, a single machine could both act as the server for end users and as a client for database.

2. <strong>Server</strong> - a machine or process that provides data or service for a client, usually by listening for incoming network calls
- Note: a single machine or software can be both a client and server at the same time. For instance, a single machine could both act as the server for end users and as a client for database.

3. <strong>Client-Server model</strong> - a paradigm by which modern systems are designed, which consists of clients requesting data or service from servers and servers providing data or service to clients.

4. <strong>IP Address</strong> - an address given to each machine connected to the public internet. IPv4 addresses consists of 4 numbers separated by dots: a.b.c.d where all 4 numbers are between 0 and 255. Special values include:
- 127.0.0.1 - Your own local machine. Also referred to as local host
- 192.168.x.y - your private network. For instance, your machine and all machines on your private wifi network will usually have the 192.168 prefix.

5. <strong>Port</strong> - in order for multiple programs to listen for new network connections on the same machine without colliding, they pick a port to listen on. A port is an integer between 0 and 65,535 (2^16 ports total).
- Typically, ports 0-123 are reserved for system ports (also called well-known ports) and shouldn't be use by user-level processes. Certain ports have pre-defined uses, and although you usually won't be required to have them memorized, they can sometimes come in handy.
- Some examples:
  - 22: Secure shell
  - 53: DNS lookup
  - 80: HTTP
  - 443: HTTPS

6. <strong>DNS</strong> - short for Domain Name System, it describes the entities and protocols involved in the translation from domain names to IP addresses.
- Typically, machines make a DNS query to a well known entity which is responsible for returning the IP address (or multiple ones) of the requested domain name in the response.

## Client - Server model/architecture

- Foundation of modern internet
- Foundation of how computers speak with one another

Client sends data to a server or requests data from a server. The Server then returns data for the server.

![Client - Server model](https://github.com/david-chua/Comp_Sci_Study/blob/master/System_Design/Images/Client-Server-Model.png)

Example:
- Client - Browser
- Server - AlgoExpert

The Client doesn't know what the server is. All it knows is that it can communicate with the Server. It'll request info from the server. Based on the response of the server, it'll be able to do stuff.

When you put Algoexpert in your browser, it does a DNS query to find out what the IP address of AlgoExpert is and only then can it really speak to AlgoExpert.

DNS query is special request that goes to a predetermined set of server and asks for the IP address of the server.

You can think of IP address as mailbox.
Google cloud platform hosts AlgoExpert. Google cloud platform shows the IP address of the site. The google server hosting AlgoExpert has a specific IP address.

Once the DNS sends the IP address back, the Client knows where AlgoExpert is. Then the Client sends an HTTP requests ( a way to send info that the server can understand). The request also contains the address of the client. In this way, the server knows where to send return data (source address).
After getting the request from the Client, the server then sends specific data based on the request and sends it back to the client where the browser can see the results.
