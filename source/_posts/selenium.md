---
title: Selenium
date: 2024-05-04 19:50:01
background: bg-[#62ae41]
tags:
  - automation
  - testing
categories:
  - Programming
intro: |
  This cheat sheet is a crash course for Selenium beginners and help to get the idea about the basic concepts of Selenium.
---

## Getting Started

### Initialize Browser Drivers {.row-span-2}

| Browser   | Syntax                                  |
| --------- | --------------------------------------- |
| `Chrome`  | WebDriver driver = new ChromeDriver();  |
| `Edge`    | WebDriver driver = new EdgeDriver();    |
| `Firefox` | WebDriver driver = new FirefoxDriver(); |
| `Safari`  | WebDriver driver = new SafariDriver();  |

{.show-header .left-text}

### Selenium Locators {.col-span-2}

| Locator           | Syntax                                        |
| ----------------- | --------------------------------------------- |
| `className`       | driver.findElement(By.className (“key”))      |
| `cssSelector`     | driver.findElement(By.cssSelector(key"))      |
| `id `             | driver.findElement(By.id(key"))               |
| `linkText`        | driver.findElement(By.linkText(key"))         |
| `name`            | driver.findElement(By.name(“key"))            |
| `partialLinkText` | driver.findElement(By.partialLinkText(“key")) |
| `tagName `        | driver.findElement(By.tagName (“key”))        |
| `xpath`           | driver.findElement(By.xpath(“key"))           |

{.show-header .left-text}

### Navigate to URL

```shell script
driver.get("https://www.example.com");
```

### Close all browser windows

```shell script
driver.quit();
```

### Close the current browser window

```shell script
driver.close();
```

### Navigation {.col-span-2}

| Description                     | Syntax                                           |
| ------------------------------- | ------------------------------------------------ |
| `Navigate to a new URL`         | driver.navigate().to("https://www.newsite.com"); |
| `Go forward to the next page`   | driver.navigate().forward();                     |
| `Go back to the previous page ` | driver.navigate().back();                        |
| `Refresh the current page`      | driver.navigate().refresh();                     |

{.show-header .left-text}

### Frame Handling {.col-span-2}

| Description                       | Syntax                              |
| --------------------------------- | ----------------------------------- |
| `Switch to a frame`               | driver.switchTo().frame("frameId"); |
| `Switch back to the main content` | driver.switchTo().defaultContent(); |

{.show-header .left-text}

### Alerts/Pop-Ups

```shell script
Alert alert = driver.switchTo().alert();

// Used to click on the ‘OK’ button of the alert.
alert.accept();

// Used when the ‘Cancel’ button is clicked in the alert box.
alert.dismiss();

// Used to send text to an alert
alert.sendKeys("text");

// Used to capture the alert message.
alert().getText();

```

### Mouse and Keyboard Actions {.col-span-2}

```shell script
Actions actions = new Actions(driver);

// Shifts the mouse pointer to the center of the element and click on it
actions.moveToElement(element).click().build().perform();

// Performs double click on the element
actions.doubleClick(element).perform();

// Drags the element from one point and drops to another
actions.dragAndDrop(source, target).perform();

// Sends a series of keys to the element
actions.sendKeys(element, "text").perform();

```

### Page Information {.col-span-1}

```shell script
// Get the page title
driver.getTitle();

// Get the current page URL
driver.getCurrentUrl();

// Get the entire page source code
driver.getPageSource();

```

### Waits {.col-span-3}

```shell script
// Explicit Wait :- These are conditional waits can be applied to satisfy a particular condition
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.elementToBeClickable(element));
```

```shell script
// Implicit Wait :- Once the command is run, Implicit Wait remains for the entire duration for which the browser is open.
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```

```shell script
// Fluent Wait :- Fluent Wait in Selenium marks the maximum amount of time for Selenium WebDriver to wait for a certain condition (web element) becomes visible. It also defines how frequently WebDriver will check if the condition appears before throwing the “ElementNotVisibleException”.
FluentWait wait = new FluentWait(driver);
//Specify the timeout of the wait
wait.withTimeout(5000, TimeUnit.MILLISECONDS);
//Specify polling time
wait.pollingEvery(250, TimeUnit.MILLISECONDS);
//Specify what exceptions to ignore
wait.ignoring(NoSuchElementException.class)
//This is how we specify the condition to wait on.
wait.until(ExpectedConditions.alertIsPresent());
```
