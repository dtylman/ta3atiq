import sys
from HTMLParser import HTMLParser


# create a subclass and override the handler methods
class MyHTMLParser(HTMLParser):  

    def __init__(self):
        HTMLParser.__init__(self)
        self.line = ""
        self.cell = 0
    
    def handle_endtag(self, tag):
        self.cell = self.cell + 1
        if (tag=="tr"):
            print(self.line)
            self.line = ""
            self.cell = 0
    
    def handle_data(self, data):  
        text = data.strip();
        if self.cell==0 and text!="":
            self.line += "table[" + text +"]=0;"  # number 
        if self.cell==2:
            self.line += " //" + text    
        

# instantiate the parser and fed it some HTML
parser = MyHTMLParser()
parser.feed(open('unicode.html').read())