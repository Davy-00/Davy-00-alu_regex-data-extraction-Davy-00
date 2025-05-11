#!/usr/bin/env ruby
# Script that matches a string starting with 'h', ending with 'n', and having any single character in between

puts ARGV[0].scan(/^h.n$/).join
