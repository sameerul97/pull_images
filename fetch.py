# Command to install on Bauer Devices without requesting Admin permission
# /usr/bin/python -m pip install requests bs4 json --user
# Purpose: Fetch all the links which has status code of 200 (Valid URLs)

from bs4 import BeautifulSoup
import requests
import json

rootLink = "http://creative.bauermedia.co.uk/_index.php"
Page_Urls = {"URLs":[]} 
temp_links = []

def getAllLinks(rootLink):
    try:
        content = requests.get(rootLink)
        soup = BeautifulSoup(content.text,"html.parser")
    except requests.ConnectionError:
        print("Failed to connect")

    for link in soup.find_all('a'):
        link = 'http://creative.bauermedia.co.uk/'+link.get('href')
        temp_links.append(link)

def checkValidURLs(temp_links):
    for i in temp_links:
        try:
            response = requests.get(i)
            if response.status_code == 200 : 
                Page_Urls['URLs'].append(i)
                print(response, response.status_code, "ロ")
            else:
                print(response, response.status_code, "✖")
        except requests.ConnectionError:
            print("Failed to connect")
 
def createJSON(urls):
    print(urls)
    with open('URL_Data2.json', 'w') as fp:
        json.dump(urls, fp)

def main():
    getAllLinks(rootLink)
    checkValidURLs(temp_links)
    createJSON(Page_Urls)

main()


 
