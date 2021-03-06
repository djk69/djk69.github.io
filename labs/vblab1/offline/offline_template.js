dataxmlstr = hereDoc(function(){/*!

<learningObject editorVersion="3" targetFolder="Nottingham" name="Automated Deployment of Virtual Machines - Part 1" language="en-GB" navigation="Linear" textSize="12" theme="flatblue" displayMode="fill window" responsive="true"><text linkID="PG1518375664988" name="Home"><![CDATA[<p>.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p style="text-align: center;"><span style="font-size:36px;">Automated Deployment of Virtual Machines - Part 1</span></p>
]]></text><text linkID="PG1518688260292" name="Download and Install Oracle VirtualBox"><![CDATA[<p><strong>Step 1:&nbsp;&nbsp; &nbsp;Download and Install Oracle VirtualBox</strong></p>

<p>&nbsp;</p>

<p>Navigate to the following URL to download VirtualBox<img alt="Oracle VirtualBox" height="64" src="FileLocation + 'media/vbox.jpg'" style="float:right" width="214" /></p>

<p><a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">https://www.virtualbox.org/wiki/Downloads</a></p>

<ul>
	<li>VirtualBox Platform package for Windows</li>
	<li>Oracle VM Extension Pack</li>
</ul>

<p>When installing accept all default options and prompts.</p>
]]></text><text linkID="PG1518627713883" name="Configure Oracle VirtualBox Preferences"><![CDATA[<p><strong>Step 2:&nbsp;&nbsp; &nbsp;Configure Oracle VirtualBox Preferences</strong></p>

<p>To optimise the installation of Oracle VirtualBox so that we can efficiently use all available hard drive space on our computer it is recommended that we change the default location for all newly created virtual machines.</p>

<p>&nbsp;</p>

<p>First we need to create a folder on a separate partition or hard drive to our operating system.</p>

<p>Example: <em>D:\VirtualBox</em></p>

<p>&nbsp;</p>

<p>Next in Oracle VirtualBox we change the default location for all new virtual machines.<br />
&nbsp;</p>

<p><em>File &gt; Preferences &gt; General &gt; Default Machine Folder location</em></p>

<p>Select the folder that you have just created as the default location.</p>
]]></text><text linkID="PG1518375684592" name="Download and Install Vagrant"><![CDATA[<p><strong>Step 3:&nbsp;&nbsp; &nbsp;Download and Install Vagrant</strong></p>

<p>&nbsp;</p>

<p>Navigate to the following location and install Vagrant.<img alt="" height="85" src="FileLocation + 'media/vagrant.jpg'" style="float:right" width="249" /></p>

<p>&nbsp;</p>

<p><a href="https://www.vagrantup.com/downloads.html" target="_blank">https://www.vagrantup.com/downloads.html</a></p>

<p>&nbsp;</p>

<p>Follow all prompts and accept all default settings.</p>

<p>&nbsp;</p>
]]></text><text linkID="PG1518627760319" name="Configure Windows PATH environment variable"><![CDATA[<p><strong>Step 4: Configure Oracle VirtualBox and Vagrant</strong></p>

<p>&nbsp;</p>

<p>To allow Vagrant and Oracle VirtualBox to work well together it is necessary to modify the PATH environment variable.</p>

<p>&nbsp;</p>

<p>For Windows 7 follow the steps below, for other Windows operating systems the steps will vary slightly.</p>

<p>&nbsp;</p>

<p><em>Start &gt; Control Panel &gt; System Applet &gt; Advanced Tab &gt; Environment Variables</em> button</p>

<p>&nbsp;</p>

<p>Under the section <em>System Variables</em> scroll down until you find the <em>PATH </em>variable.<br />
Double click and you will now be able to add the following locations to the path statement (locations may vary).</p>

<p>&nbsp;</p>

<p><em>C:\Hashicorp\Vagrant\bin</em></p>

<p>&nbsp;</p>

<p>This adds the path to the vagrant executable to the path statement</p>

<p>&nbsp;</p>

<p><em>C:\Program Files\Oracle\VirtualBox</em></p>

<p>This add the path to the Oracle VirtualBox executable to the path statement.</p>
]]></text><textVideo linkID="PG1518627144994" name="Screencast - Step by Step" align="Top" url="FileLocation + 'media/VBox and Vagrant.mp4'" tip="Oracle VirtualBox and Vagrant Installation" transcriptTabTxt="Transcript" movieSize="640,480"><![CDATA[]]></textVideo></learningObject>

*/});