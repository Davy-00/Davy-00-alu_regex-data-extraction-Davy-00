#!/usr/bin/env ruby
# Script that matches zero or more occurrences of 'School' in the input argument

puts ARGV[0].scan(/School*/).join
