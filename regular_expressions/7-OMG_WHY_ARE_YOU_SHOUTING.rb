#!/usr/bin/env ruby
# Script that matches only capital letters in the input argument

puts ARGV[0].scan(/[A-Z]/).join
