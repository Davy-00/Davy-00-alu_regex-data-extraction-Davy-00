#!/usr/bin/env ruby
# Script that matches exactly 3 occurrences of 'School' in the input argument
# The regex should not contain square brackets

puts ARGV[0].scan(/(School){3}/).join
