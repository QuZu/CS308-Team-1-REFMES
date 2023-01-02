import selenium
import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

WEB_LINK="https://www.refmes.org/"
LOCAL_LINK="http://localhost:3000/"

class IsSendReport(unittest.TestCase):
    def setUp(self):
        PATH_ABILAL="C:\Program Files(x86)\chromedriver.exe"
        ser=Service(PATH_ABILAL)
        self.driver=webdriver.Chrome(service=ser)

    def test_send_report_in_refmes(self):
        driver = self.driver
        time.sleep(2)
        driver.get(LOCAL_LINK)
        time.sleep(2)
        element=driver.find_element(By.LINK_TEXT,"Login")
        element.click()
        time.sleep(2)
        Email=driver.find_element(By.XPATH,"//input[@name='email']")
        Email.send_keys("a.bilalyildiz@gmail.com")
        Email.send_keys(Keys.RETURN)
        Password=driver.find_element(By.XPATH,"//input[@name='password']")
        Password.send_keys("8765432Bb.")
        Password.send_keys(Keys.RETURN)
        time.sleep(3)
        Report = driver.find_element(By.XPATH,"//a[@id='report']")
        Report.click()
        time.sleep(3)
        Header = driver.find_element(By.XPATH, "//div[@class='row report-page-header']")
        print(Header.text)


    def tearDown(self):
        self.driver.close()
if __name__ == "__main__":
    unittest.main()