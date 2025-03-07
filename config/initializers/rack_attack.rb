# class Rack::Attack
#   # Throttle requests by IP
#   throttle('req/ip', limit: 60, period: 1.minute) do |req|
#     req.ip
#   end

#   # Block requests that target WordPress-specific paths
#   blocklist('block_wordpress_probes') do |req|
#     req.path.match? %r{/wp-|/wp-admin|/wp-content|/wp-includes|/xmlrpc.php}i
#   end

#   # Block requests targeting common PHP-based attack patterns
#   blocklist('block_common_php_exploits') do |req|
#     req.path.match? %r{/(\.env|\.git|\.svn|config\.php|phpmyadmin|admin|shell|info|logs|debug|login|wp-login|xmlrpc|filemanager|uploads|phpinfo|themes|setup)}i
#   end

#   # Block requests with known suspicious extensions
#   blocklist('block_suspicious_extensions') do |req|
#     req.path.match? %r{\.(php|sql|bak|tar|zip|gz|log|sh)$}i
#   end

#   # Block requests with empty or malformed user agents
#   blocklist('block_empty_user_agent') do |req|
#     req.user_agent.nil? || req.user_agent.empty?
#   end

#   # Block requests with excessive query parameters (potential LFI/RFI attacks)
#   blocklist('block_suspicious_queries') do |req|
#     req.query_string.match? %r{(\.\./|=http|=%2f%2e%2e|%00)}i
#   end

#   # Log blocked requests
#   ActiveSupport::Notifications.subscribe("rack.attack") do |name, start, finish, request_id, req|
#     if req.is_a?(Rack::Request) && req.env['rack.attack.match_type'] == :blocklist
#       Rails.logger.warn "Blocked request: #{req.ip} - #{req.path} - #{req.user_agent}"
#     end
#   end
# end
