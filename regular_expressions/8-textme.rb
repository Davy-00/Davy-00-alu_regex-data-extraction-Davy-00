#!/usr/bin/env ruby
# Script that extracts sender, receiver, and flags from a log message

log = ARGV[0]

sender = log.match(/\[from:([^\]]+)\]/)
receiver = log.match(/\[to:([^\]]+)\]/)
flags = log.match(/\[flags:([^\]]+)\]/)

puts "#{sender[1]},#{receiver[1]},#{flags[1]}"
