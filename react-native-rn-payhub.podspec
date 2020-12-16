require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-rn-payhub"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-rn-payhub
                   DESC
  s.homepage     = "https://github.com/pradeep-dev-shamlatech/react-native-rn-payhub"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Pradeep Tripathi" => "pradeep@shamlatech.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/pradeep-dev-shamlatech/react-native-rn-payhub.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

