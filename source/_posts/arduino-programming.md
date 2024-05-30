---
title: Arduino Programming
date: 2024-05-29 8:58:31
background: bg-[#387f83]
label:
tags: -cpp
  -I/O
categories:
  - Programming
intro: |
  Ardunio programming cheat-sheet for I/O programming and  ardunio board programming.

plugins:
  - copyCode
---

## Getting Started

### Gather Necessary Materials

- Arduino Board: Any model, such as Arduino Uno, Mega, Nano, etc.
- USB Cable: Compatible with your Arduino board (commonly USB Type-A to Type-B for Uno).
- Computer: Windows, macOS, or Linux.

### Install the Arduino IDE

- windows/mac/linux
- Go to the Arduino Software page.
- Download the os installer.
- Run the installer and follow the instructions.

### Connect Your Arduino Board

- Connect the Arduino board to your computer using the USB cable.
- The power LED on the Arduino should light up, indicating it’s receiving power.

### Configure the Arduino IDE

- Open the Arduino IDE.
- Select Your Board:
- Go to Tools > Board and select the model of your Arduino board (e.g., Arduino Uno).

- Select the Port:

- Go to Tools > Port and select the port that the Arduino is connected to (it usually shows as COMx on Windows, /dev/cu.usbmodemxxxx on macOS, and /dev/ttyUSBx on Linux).

## Basic Structure

### Setup and Loop

```cpp
void setup() {
  // Code here runs once
}

void loop() {
  // Code here runs repeatedly
}
```

### Comment

```cpp
// Single-line comment

/*
Multi-line
comment
*/
```

### Variable

```cpp
int ledPin = 13; // Integer
float voltage = 5.0; // Floating-point number
char letter = 'A'; // Character
String text = "Hello"; // String
```

### Pin Modes

```cpp
pinMode(pin, mode);
```

### Digital I/O

```cpp
digitalWrite(pin, value);
int value = digitalRead(pin);

```

### Analog I/O

```cpp
analogWrite(pin, value);
int value = analogRead(pin);

```

## Serial Communication

### Begin Serial Communication

```cpp
Serial.begin(baudRate);
```

### Print to Serial Monitor

```cpp
Serial.print(data);
Serial.println(data);
```

### Read from Serial Monitor

```cpp
if (Serial.available()) {
  char data = Serial.read();
}
```

## Control Structures

### If Statement

```cpp
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

### For Loop

```cpp
for (initialization; condition; increment) {
  // Code to execute
}
```

### While Loop

```cpp
while (condition) {
  // Code to execute
}
```

### Functions

```cpp
returnType functionName(parameters) {
  // Code to execute
  return value;
}
```

## Libraries

### Include a Library

```cpp
#include <LibraryName.h>
```

### Using a Library

```cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9); // Attach servo to pin 9
}

void loop() {
  myServo.write(90); // Set servo to 90 degrees
  delay(1000);
  myServo.write(0); // Set servo to 0 degrees
  delay(1000);
}
```

## Common Functions

### Delay

```cpp
delay(milliseconds);

```

### Millis

```cpp
unsigned long currentTime = millis();

```

### Map

```cpp
long outputValue = map(inputValue, fromLow, fromHigh, toLow, toHigh);

```

### Random

```cpp
long randomValue = random(max);
long randomValue = random(min, max);

```

### Random Seed

```cpp
randomSeed(analogRead(0)); // Seed from analog pin 0

```

## Sensors and Modules

### Reading Temperature with DHT Sensor

```cpp
#include <DHT.h>

#define DHTPIN 2     // Pin which is connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" *C");

  delay(2000);
}
```

### Blinking LED

```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Turn the LED on
  delay(1000);                 // Wait for 1 second
  digitalWrite(ledPin, LOW);   // Turn the LED off
  delay(1000);                 // Wait for 1 second
}

```

### Read Button Input

```cpp
const int buttonPin = 2;  // Pin where the push button is connected
const int ledPin = 13;    // Pin where the LED is connected

void setup() {
  pinMode(buttonPin, INPUT);  // Set the button pin as an input
  pinMode(ledPin, OUTPUT);    // Set the LED pin as an output
}

void loop() {
  int buttonState = digitalRead(buttonPin);  // Read the state of the button

  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);  // Turn the LED on
  } else {
    digitalWrite(ledPin, LOW);   // Turn the LED off
  }
}


```

### Analog Input

```cpp
const int potPin = A0;    // Pin where the potentiometer is connected
const int ledPin = 9;     // Pin where the LED is connected

void setup() {
  pinMode(ledPin, OUTPUT);  // Set the LED pin as an output
}

void loop() {
  int potValue = analogRead(potPin);  // Read the potentiometer value
  int ledBrightness = map(potValue, 0, 1023, 0, 255);  // Map the value to a range from 0 to 255

  analogWrite(ledPin, ledBrightness);  // Set the brightness of the LED
  delay(10);  // Small delay to make the LED change smoothly
}


```

### Serial Communication

```cpp
void setup() {
  Serial.begin(9600);  // Start the serial communication at 9600 baud rate
}

void loop() {
  Serial.println("Hello, world!");  // Send a message to the serial monitor
  delay(1000);  // Wait for 1 second
}


```

### Temperature Sensor

```cpp
const int tempPin = A0;  // Pin where the TMP36 sensor is connected

void setup() {
  Serial.begin(9600);  // Start the serial communication at 9600 baud rate
}

void loop() {
  int tempValue = analogRead(tempPin);  // Read the sensor value
  float voltage = tempValue * (5.0 / 1023.0);  // Convert the value to voltage
  float temperatureC = (voltage - 0.5) * 100;  // Convert the voltage to temperature in Celsius

  Serial.print("Temperature: ");
  Serial.print(temperatureC);
  Serial.println(" C");
  delay(1000);  // Wait for 1 second
}


```

### RGB LED Control

```cpp
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

const int potRedPin = A0;
const int potGreenPin = A1;
const int potBluePin = A2;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop() {
  int redValue = analogRead(potRedPin);
  int greenValue = analogRead(potGreenPin);
  int blueValue = analogRead(potBluePin);

  analogWrite(redPin, map(redValue, 0, 1023, 0, 255));
  analogWrite(greenPin, map(greenValue, 0, 1023, 0, 255));
  analogWrite(bluePin, map(blueValue, 0, 1023, 0, 255));

  delay(10);
}

```

### Ultrasonic Sensor

```cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  long duration;
  int distance;

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(1000);
}
```

### Controlling a Servo Motor

```cpp
#include <Servo.h>

Servo myServo;
const int potPin = A0;

void setup() {
  myServo.attach(9);  // Attach the servo to pin 9
}

void loop() {
  int potValue = analogRead(potPin);  // Read the potentiometer value
  int angle = map(potValue, 0, 1023, 0, 180);  // Map the value to an angle between 0 and 180

  myServo.write(angle);  // Set the servo position
  delay(15);  // Small delay for the servo to reach the position
}

```

### Displaying Text on an LCD

```cpp
#include <LiquidCrystal.h>

// Initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  // Set up the LCD's number of columns and rows
  lcd.begin(16, 2);
  // Print a message to the LCD
  lcd.print("Hello, World!");
}

void loop() {
  // Set the cursor to column 0, line 1 (second row)
  lcd.setCursor(0, 1);
  // Print the number of seconds since reset
  lcd.print(millis() / 1000);
}
```

## Wireless Communication with NRF24L01

### Transmitter Code

```cpp
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10);  // CE, CSN pins

const byte address[6] = "00001";  // Address

void setup() {
  radio.begin();
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}

void loop() {
  const char text[] = "Hello";
  radio.write(&text, sizeof(text));
  delay(1000);
}
```

### Receiver Code

```cpp
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10);  // CE, CSN pins

const byte address[6] = "00001";  // Address

void setup() {
  Serial.begin(9600);
  radio.begin();
  radio.openReadingPipe(0, address);
  radio.setPALevel(RF24_PA_MIN);
  radio.startListening();
}

void loop() {
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    Serial.println(text);
  }
}

```

## Also Read

- [Ardunio](https://www.arduino.cc/en/software)
