ln -s ../../../tool/node_modules node_modules
mkdir src
mkdir dest/builder
ln -s ../../../pdata dest/pdata

if [ ! -f "../../../tasks/node_modules" ]; then 
	ln -s ../../../tool/node_modules ../../../tasks/node_modules
fi 