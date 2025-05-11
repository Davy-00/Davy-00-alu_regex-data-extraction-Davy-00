#!/usr/bin/env ruby
# Script that matches zero or more occurrences of 'School' in the input argument without using square brackets

puts ARGV[0].scan(/(School)*/).join
