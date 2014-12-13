sudo locale-gen UTF-8
echo '================================================='
echo 'Starting up...'
echo '================================================='
echo 'Updating packages...'
echo '================================================='
curl -sL https://deb.nodesource.com/setup | sudo bash -
echo '================================================='
echo 'Installing Node-Stable...'
echo '================================================='
sudo apt-get install -y --force-yes build-essential nodejs
echo '================================================='
echo 'Installing Node-Latest...'
echo '================================================='
sudo npm install -g n
sudo n 0.11.14
echo '================================================='
echo 'All Done!'
echo '================================================='
node -v
echo 'Installing MC...'
echo '================================================='
sudo aptitude install mc -y

