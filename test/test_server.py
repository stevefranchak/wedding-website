#!/usr/bin/env python

# Mostly based off of http://stackoverflow.com/questions/12193803/invoke-python-simplehttpserver-from-command-line-with-no-cache-option
# Purpose: We don't want the browser to cache files during development

from __future__ import print_function
import sys, os, collections
import SimpleHTTPServer

class MyHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()
        SimpleHTTPServer.SimpleHTTPRequestHandler.end_headers(self)

    '''
    ' Advise the browser to not cache files
    ' Else, development will be a nightmare
    '''
    def send_my_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")


def print_error(*args, **kwargs):
    def map_multilines(ele):
        if isinstance(ele, collections.Iterable):
            return '\n'.join(ele)
        return ele

    args = map(map_multilines, args) 

    print(*args, file=sys.stderr, **kwargs)


if __name__ == '__main__':

    site_root_dir = os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), '..', 'site');

    if not os.path.isdir(site_root_dir):
        print_error((
                        'Error: Directory ' + os.path.abspath(site_root_dir) + ' does not exist!', 
                        'You must run "grunt" before proceeding.'
                    ));
        exit(1)

    os.chdir(site_root_dir);

    SimpleHTTPServer.test(HandlerClass=MyHTTPRequestHandler)