mkdir src
mkdir dest\builder
if not exist ..\..\..\tasks\node_modules (
	mklink /d ..\..\..\tasks\node_modules ..\tool\node_modules
	)

mklink /d node_modules ..\..\..\tool\node_modules
mklink /d dest\pdata ..\..\..\pdata
mklink /d dest\pdata_h ..\..\..\pdata_h