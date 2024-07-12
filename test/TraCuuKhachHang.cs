// Generated by Selenium IDE
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using NUnit.Framework;
[TestFixture]
public class TracukhchhngTest {
  private IWebDriver driver;
  public IDictionary<string, object> vars {get; private set;}
  private IJavaScriptExecutor js;
  [SetUp]
  public void SetUp() {
    driver = new ChromeDriver();
    js = (IJavaScriptExecutor)driver;
    vars = new Dictionary<string, object>();
  }
  [TearDown]
  protected void TearDown() {
    driver.Quit();
  }
  [Test]
  public void tracukhchhng() {
    driver.Navigate().GoToUrl("http://localhost:3000/login");
    driver.Manage().Window.Size = new System.Drawing.Size(1936, 1048);
    driver.FindElement(By.CssSelector(".form-control_username")).Click();
    driver.FindElement(By.CssSelector(".form-control_username")).SendKeys("present111");
    driver.FindElement(By.CssSelector(".form-control_password")).SendKeys("123");
    driver.FindElement(By.CssSelector(".btn-login")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".btn-login"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    driver.FindElement(By.CssSelector("div > .menu-bars path")).Click();
    driver.FindElement(By.CssSelector(".nav-text:nth-child(4) .item-title")).Click();
    driver.FindElement(By.CssSelector(".btn-primary")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".btn-primary"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    driver.FindElement(By.CssSelector(".form-group:nth-child(1) > .form-control")).Click();
    driver.FindElement(By.CssSelector(".form-group:nth-child(1) > .form-control")).SendKeys("Nguyễn Ly Ly");
    driver.FindElement(By.CssSelector(".form-group:nth-child(2) > .form-control")).SendKeys("098567345");
    driver.FindElement(By.CssSelector(".form-group:nth-child(3) > .form-control")).Click();
    driver.FindElement(By.CssSelector(".form-group:nth-child(3) > .form-control")).SendKeys("Thành phố Hồ Chí Minh");
    driver.FindElement(By.CssSelector(".form-group:nth-child(4) > .form-control")).SendKeys("hoa@gmail.com");
    driver.FindElement(By.CssSelector(".btn-submit")).Click();
    driver.FindElement(By.CssSelector(".btn-primary")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".btn-primary"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    driver.FindElement(By.CssSelector(".form-group:nth-child(1) > .form-control")).Click();
    driver.FindElement(By.CssSelector(".form-group:nth-child(1) > .form-control")).SendKeys("Nguyễn Ly Ly");
    driver.FindElement(By.CssSelector(".form-group:nth-child(2) > .form-control")).SendKeys("098567345");
    driver.FindElement(By.CssSelector(".form-group:nth-child(3) > .form-control")).SendKeys("Thành phố Hồ Chí Minh");
    driver.FindElement(By.CssSelector(".form-group:nth-child(4) > .form-control")).SendKeys("hoa@gmail.com");
    driver.FindElement(By.CssSelector(".btn-submit")).Click();
    driver.FindElement(By.CssSelector(".btn-exit")).Click();
    driver.FindElement(By.CssSelector(".form-control")).Click();
    driver.FindElement(By.CssSelector(".form-control")).SendKeys("Ly");
    driver.FindElement(By.CssSelector(".fa-search")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".fa-search"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    driver.FindElement(By.CssSelector(".form-select")).Click();
    {
      var dropdown = driver.FindElement(By.CssSelector(".form-select"));
      dropdown.FindElement(By.XPath("//option[. = 'Họ Tên']")).Click();
    }
    driver.FindElement(By.CssSelector(".btn-base")).Click();
    driver.FindElement(By.CssSelector(".form-control")).Click();
    driver.FindElement(By.CssSelector(".form-control")).SendKeys("Lyy");
    driver.FindElement(By.CssSelector(".btn-base")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".btn-base"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    driver.FindElement(By.CssSelector(".btn-del > svg")).Click();
    {
      var element = driver.FindElement(By.CssSelector(".btn-del > svg"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element).Perform();
    }
    {
      var element = driver.FindElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.MoveToElement(element, 0, 0).Perform();
    }
    driver.FindElement(By.CssSelector(".delete")).Click();
  }
}