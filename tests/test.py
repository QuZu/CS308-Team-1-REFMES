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

class UserStory1(unittest.TestCase):
    def setUp(self):
        PATH_KUZU="C:\Program Files(x86)\chromedriver.exe"
        ser=Service(PATH_KUZU)
        self.driver=webdriver.Chrome(service=ser)

    def test_search_in_python_org(self):
        driver = self.driver
        time.sleep(2)
        driver.get(LOCAL_LINK)
        time.sleep(2)
        element=driver.find_element(By.LINK_TEXT,"Login")
        element.click()
        time.sleep(2)
        Email=driver.find_element(By.XPATH,"//input[@name='email']")
        Email.send_keys("emertkuzu35@gmail.com")
        Email.send_keys(Keys.RETURN)
        Password=driver.find_element(By.XPATH,"//input[@name='password']")
        Password.send_keys("Enis123!")
        Password.send_keys(Keys.RETURN)
        time.sleep(3)
        Referee=driver.find_element(By.LINK_TEXT, "Referees")
        Referee.click()
        time.sleep(3)
        RefDiv=driver.find_elements(By.XPATH,"//div[@class='d-flex justify-content-center col-xl-6 col-m-6 col-sm-12 mb-5']")
        for eachref in RefDiv:
            Scores=eachref.find_elements(By.XPATH,"//div[@class='ref-score-box']")
            for eachscore in Scores:
                print(eachscore.text)

        self.assertNotIn("No results found.", driver.page_source,)


    # def tearDown(self):
    #     self.driver.close()

if __name__ == "__main__":
    unittest.main()