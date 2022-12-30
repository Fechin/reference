---
title: HTTP Status Code
background: bg-[#3b7dc0]
date: 2020-12-26 16:09:09
tags:
    - response
    - server
categories:
    - Other
intro: |
    The http status codes cheat sheet. a quick reference to every HTTP status code.
plugins:
    - tooltip
---

HTTP Status code
-----------


### Means 

- [1xx: Informational](#1xx-information){data-tooltip="It means the request has been received and the process is continuing."}
- [2xx: Success](#2xx-successful){data-tooltip="It means the action was successfully received, understood, and accepted."}
- [3xx: Redirection](#3xx-redirection){data-tooltip="It means further action must be taken in order to complete the request."}
- [4xx: Client Error](#4xx-client-error){data-tooltip="It means the request contains incorrect syntax or cannot be fulfilled."}
- [5xx: Server Error](#5xx-server-error){data-tooltip="It means the server failed to fulfill an apparently valid request."}



### 2xx. Successful {.row-span-2}
* [200: OK](https://tools.ietf.org/html/rfc7231#section-6.3.1){data-tooltip="The request is OK."}
* [201: Created](https://tools.ietf.org/html/rfc7231#section-6.3.2){data-tooltip="The request is complete, and a new resource is created ."}
* [202: Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3){data-tooltip="The request is accepted for processing, but the processing is not complete."}
* [203: Non-Authoritative Information](https://tools.ietf.org/html/rfc7231#section-6.3.4){data-tooltip="The information in the entity header is from a local or third-party copy, not from the original server."}
* [204: No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5){data-tooltip="A status code and a header are given in the response, but there is no entity-body in the reply."}
* [205: Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6){data-tooltip="The browser should clear the form used for this transaction for additional input."}
* [206: Partial Content](https://tools.ietf.org/html/rfc7233#section-4.1){data-tooltip="The server is returning partial data of the size requested. Used in response to a request specifying a Range header. The server must specify the range included in the response with the Content-Range header."}




### 4xx. Client Error   {.row-span-3}
* [400: Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1){data-tooltip="The server did not understand the request."}
* [401: Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1){data-tooltip="The requested page needs a username and a password."}
* [402: Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2){data-tooltip="You can not use this code yet."}
* [403: Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3){data-tooltip="Access is forbidden to the requested page."}
* [404: Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4){data-tooltip="The server can not find the requested page."}
* [405: Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5){data-tooltip="The method specified in the request is not allowed."}
* [406: Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6){data-tooltip="The server can only generate a response that is not accepted by the client."}
* [407: Proxy Authentication Required](https://tools.ietf.org/html/rfc7235#section-3.2){data-tooltip="You must authenticate with a proxy server before this request can be served."}
* [408: Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7){data-tooltip="The request took longer than the server was prepared to wait."}
* [409: Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8){data-tooltip="The request could not be completed because of a conflict."}
* [410: Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9){data-tooltip="The requested page is no longer available ."}
* [411: Length Required](https://tools.ietf.org/html/rfc7231#section-6.5.10){data-tooltip="The "Content-Length" is not defined. The server will not accept the request without it ."}
* [412: Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2){data-tooltip="The pre condition given in the request evaluated to false by the server."}
* [413: Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11){data-tooltip="The server will not accept the request, because the request entity is too large."}
* [414: URI Too Long](https://tools.ietf.org/html/rfc7231#section-6.5.12){data-tooltip="The server will not accept the request, because the url is too long. Occurs when you convert a "post" request to a "get" request with a long query information ."}
* [415: Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13){data-tooltip="The server will not accept the request, because the mediatype is not supported ."}
* [416: Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4){data-tooltip="The requested byte range is not available and is out of bounds."}
* [417: Expectation Failed](https://tools.ietf.org/html/rfc7231#section-6.5.14){data-tooltip="The expectation given in an Expect request-header field could not be met by this server."}
* [426: Upgrade Required](https://tools.ietf.org/html/rfc7231#section-6.5.15){data-tooltip="The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."}
* [451: Unavailable For Legal Reasons](https://datatracker.ietf.org/doc/html/rfc7725#section-3){data-tooltip="This status code indicates that the server is denying access to the resource as a consequence of a legal demand."}





### 1xx. Information
* [100: Continue](https://tools.ietf.org/html/rfc7231#section-6.2.1){data-tooltip="Only a part of the request has been received by the server, but as long as it has not been rejected, the client should continue with the request."}
* [101: Switching Protocols](https://tools.ietf.org/html/rfc7231#section-6.2.2){data-tooltip="The server switches protocol."}
* [102: Processing](https://tools.ietf.org/html/rfc2518#section-10.1){data-tooltip="An interim response used to inform the client that the server has accepted the complete request, but has not yet completed it."}




### 3xx. Redirection
* [300: Multiple Choices](https://tools.ietf.org/html/rfc7231#section-6.4.1){data-tooltip="A link list. The user can select a link and go to that location. Maximum five addresses  ."}
* [301: Moved Permanently](https://tools.ietf.org/html/rfc7231#section-6.4.2){data-tooltip="The requested page has moved to a new url ."}
* [302: Found](https://tools.ietf.org/html/rfc7231#section-6.4.3){data-tooltip="The requested page has moved temporarily to a new url ."}
* [303: See Other](https://tools.ietf.org/html/rfc7231#section-6.4.4){data-tooltip="The requested page can be found under a different url ."}
* [304: Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1){data-tooltip="This is the response code to an If-Modified-Since or If-None-Match header, where the URL has not been modified since the specified date."}
* [305: Use Proxy](https://tools.ietf.org/html/rfc7231#section-6.4.5){data-tooltip="The requested URL must be accessed through the proxy mentioned in the Location header."}
* [306: Unused](https://tools.ietf.org/html/rfc7231#section-6.4.6){data-tooltip="This code was used in a previous version. It is no longer used, but the code is reserved."}
* [307: Temporary Redirect](https://tools.ietf.org/html/rfc7231#section-6.4.7){data-tooltip="The requested page has moved temporarily to a new url."}


### 5xx. Server Error
* [500: Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1){data-tooltip="The request was not completed. The server met an unexpected condition."}
* [501: Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2){data-tooltip="The request was not completed. The server did not support the functionality required."}
* [502: Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3){data-tooltip="The request was not completed. The server received an invalid response from the upstream server."}
* [503: Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4){data-tooltip="The request was not completed. The server is temporarily overloading or down."}
* [504: Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5){data-tooltip="The gateway has timed out."}
* [505: HTTP Version Not Supported](https://tools.ietf.org/html/rfc7231#section-6.6.6){data-tooltip="The server does not support the "http protocol" version."}

