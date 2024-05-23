---
title: OpenSSL
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-emerald-600
tags:
categories:
  - Linux Command
intro: |
  This is a reference of commands to use to interact with electronic certificates
plugins:
  - copyCode
---

## Private Key {.cols-2}

### Print out the private key details

```bash
openssl rsa -check -text -in privateKey.key
```

### Print out the hashes of the private key

```bash
openssl rsa -noout -modulus -in privateKey.key | openssl md5
openssl rsa -noout -modulus -in privateKey.key | openssl sha1
openssl rsa -noout -modulus -in privateKey.key | openssl sha256
openssl rsa -noout -modulus -in privateKey.key | openssl sha512
```

### Change password

```bash
openssl rsa -aes256 -in privateKey.key -out newPrivateKey.key
```

### List available elliptic curves

```bash
openssl ecparam -list_curves
```

### Create elliptic curve private key with a specific curve

```bash
openssl ecparam -name secp521r1 -genkey -noout -out privateKey.key
```

## Certificate {.cols-2}

### Print out the hashes of the certificate

```bash
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl x509 -noout -modulus -in certificate.crt | openssl sha1
openssl x509 -noout -modulus -in certificate.crt | openssl sha256
openssl x509 -noout -modulus -in certificate.crt | openssl sha512
```

Or, alternatively:

```bash
openssl x509 -noout -fingerprint -in certificate.crt
openssl x509 -noout -fingerprint -sha256 -in certificate.crt
```

### Print out the content of the certificates

```bash
openssl x509 -in certificate.crt -noout -text|more
```

### Print out specific fields of the certificates

```bash
openssl x509 -noout -subject certificate.crt
openssl x509 -noout -issuer certificate.crt
openssl x509 -noout -dates certificate.crt
```

### Inspect server certificates

```bash
echo | openssl s_client -servername www.openssl.org -connect \
www.openssl.org:443 2>/dev/null | openssl x509 -noout -text|more
echo | openssl s_client -servername imap.arcor.de -connect \
imap.arcor.de:993 2>/dev/null | openssl x509 -noout -text|more
```

### Verify certificates

**OK**

```bash
openssl verify -verbose -x509_strict -CAfile \
issuer.crt Test\ Haeschen\ 1.crt
```

Result:

```bash
Test Haeschen 1.crt: OK
```

**Corrupted**
([for example](https://security.stackexchange.com/questions/60804/creating-an-x-509-certificate-with-an-invalid-signature))

```bash
openssl verify -verbose -x509_strict -CAfile \
issuer.crt Test\ Haeschen\ 1_corrupted.crt
```

Result:

```bash
C = DE, ST = Thueringen, L = Rudolstadt, O = Damaschkestr. 11, OU = Arbeitszimmer, CN = Test Haeschen 1
error 7 at 0 depth lookup: certificate signature failure
error Test Haeschen 1_corrupted.crt: verification failed
40270500477F0000:error:0200008A:rsa routines:RSA_padding_check_PKCS1_type_1:invalid padding:../crypto/rsa/rsa_pk1.c:75:
40270500477F0000:error:02000072:rsa routines:rsa_ossl_public_decrypt:padding check failed:../crypto/rsa/rsa_ossl.c:598:
40270500477F0000:error:1C880004:Provider routines:rsa_verify:RSA lib:../providers/implementations/signature/rsa_sig.c:774:
40270500477F0000:error:06880006:asn1 encoding routines:ASN1_item_verify_ctx:EVP lib:../crypto/asn1/a_verify.c:217:
```

## S/Mime {.cols-2}

### create signature

```bash
openssl smime -sign -in msg.txt -text -out msg.p7s \
-signer certificate.crt -inkey privateKey.key
```

### Verify signature

```bash
openssl smime -verify -in msg.p7s -CAfile chain.pem
```

## CRL {.cols-2}

### Print out the contents of the CRL

```bash
openssl crl -inform DER -noout -text  -in crl/cacrl.der
openssl crl -inform PEM -noout -text  -in crl/cacrl.pem
```

## PKCS#12 {.cols-2}

### Display contents

```bash
openssl pkcs12 -info -in  digitalIdentity.p12
```

### Create from certificate and private key

```bash
openssl pkcs12 -export -in certificate.cert \
-inkey privateKey.key -out digitalIdentity.p12
```

### Extract private key

```bash
openssl pkcs12 -in digitalIdentity.p12 -out privateKey.key
```

### Convert to PEM

```bash
openssl pkcs12 -in digitalIdentity.p12 -out digitalIdentity.pem
```

## TSA {.cols-2}

### Display query

```bash
openssl ts -query -in query.tsq -text
```

### Display reply

```bash
openssl ts -reply -in reply.tsr -text
```

### Verify reply

```bash
openssl ts -verify -in reply.tsr -data data.dat -CAfile chain.pem
```

### Extract token from reply

```bash
openssl ts -reply -in reply.tsr -token_out -out token.tk
```

### Extract certificates from token

```bash
openssl pkcs7 -inform DER -in token.tk -print_certs -noout -text
```

## CSR {.cols-2}

### Create from existing key

```bash
openssl req -new -key privateKey.key -out my.csr
```

This can of course be a RSA key or one based on an elliptic curve. Available curves can be listed using

```bash
openssl ecparam -list_curves
```

Afterwards you chose one of the curves and create a private key like so:

```bash
openssl ecparam -name secp521r1 -genkey -noout \
-out privateKey.key
```

### Display

```bash
openssl req -in my.csr -noout -text
```

## HTTPS {.cols-2}

### Dump Certificates PEM encoded

```bash
openssl s_client -showcerts -connect www.example.com:443
```

## STARTTLS {.cols-2}

### Dump Certificates PEM encoded

```bash
openssl s_client -showcerts -starttls imap \
-connect mail.domain.com:139
```

## S/MIME verification {.cols-2}

### Possible outcomes

Message was tampered with (return code 4):

```bash
Verification failure
140485684135232:error:2E09A09E:CMS routines:CMS_SignerInfo_verify_content:verification failure:../crypto/cms/cms_sd.c:847:
140485684135232:error:2E09D06D:CMS routines:CMS_verify:content verify error:../crypto/cms/cms_smime.c:393:
```

Message signature not trusted (return code 4):

```bash
Verification failure
140146111432000:error:2E099064:CMS routines:cms_signerinfo_verify_cert:certificate verify error:../crypto/cms/cms_smime.c:252:Verify error:unable to get local issuer certificate
```

Message not signed (return code 2):

```bash
Error reading S/MIME message
140701208487232:error:0D0D40CD:asn1 encoding routines:SMIME_read_ASN1:invalid mime type:../crypto/asn1/asn_mime.c:469:type: multipart/alternative
```

Validation successful (return code 0):

```bash
Verification successful
```

### Verify the validity of an email message

```bash
openssl cms -verify -in some_email_message.eml
```

### Verify the validity of an email message explicitly specifying trust

```bash
openssl cms -verify -in some_email_message \
-CAfile trust_anchor-crt
```

### Signed and encrypted messages need to be decrypted first:

Note: the P12 file holding the digital identity must be pem-encoded! (see above)

```bash
openssl cms -decrypt -out decrypted_email_message \
-inkey p12.pem -in some_encrypted_email_message
```

## Raw {.cols-2}

### See the raw structure of an ASN.1 file (only for DER encoded files)

```bash
openssl asn1parse -in mysterious_file.pem
```

### With a bit more detail

```bash
openssl asn1parse -dump -strictpem -in mysterious_file.pem
```

## Some resources with useful OpenSSL commands

- [OpenSSL command cheatsheet](https://www.freecodecamp.org/news/openssl-command-cheatsheet-b441be1e8c4a/)
- [21 OpenSSL Examples to Help You in Real-World](https://geekflare.com/openssl-commands-certificates/)
- [The Most Common OpenSSL Commands](https://www.sslshopper.com/article-most-common-openssl-commands.html)
- [OpenSSL Quick Reference Guide](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
- [openssl_commands.md](https://gist.github.com/webtobesocial/5313b0d7abc25e06c2d78f8b767d4bc3)
- [OpenSSL Essentials: Working with SSL Certificates, Private Keys and CSRs](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)
- [OpenSSL tips and tricks](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art030)
- [Checking A Remote Certificate Chain With OpenSSL ](https://langui.sh/2009/03/14/checking-a-remote-certificate-chain-with-openssl/)
- [OpenSSL: how to extract certificates and token status from RFC3161 timestamping reply?](https://stackoverflow.com/questions/66044640/openssl-how-to-extract-certificates-and-token-status-from-rfc3161-timestamping)
- [Steps to generate CSR for SAN certificate with openssl](https://www.golinuxcloud.com/openssl-subject-alternative-name/)
- [Howto add a Subject Alternative Name extension into a Certificate Signing Request](https://support.microfocus.com/kb/doc.php?id=3522065)
