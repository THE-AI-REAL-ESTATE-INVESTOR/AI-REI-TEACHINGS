<h1>Linux Commands Cheat Sheet</h1>
<h2>Basic</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>echo</code></td>
<td>Output text or variables to terminal or file.</td>
<td>Everything Comes Here Out.</td>
<td><code>echo &quot;Hello&quot; &gt; file.txt</code></td>
</tr>
<tr>
<td><code>cat</code></td>
<td>Display or concatenate file content.</td>
<td>Think of a cat lying on a book, reading.</td>
<td><code>cat file1.txt</code></td>
</tr>
<tr>
<td><code>ls</code></td>
<td>List directory contents.</td>
<td>Look at Stuff.</td>
<td><code>ls -l</code></td>
</tr>
<tr>
<td><code>pwd</code></td>
<td>Show current directory path.</td>
<td>Path We&#39;re Doing.</td>
<td><code>pwd</code></td>
</tr>
<tr>
<td><code>cd</code></td>
<td>Change to another directory.</td>
<td>Change Direction.</td>
<td><code>cd /home/user</code></td>
</tr>
<tr>
<td><code>touch</code></td>
<td>Create a new file or update its timestamp.</td>
<td>Imagine touching a file to create or update it.</td>
<td><code>touch newfile.txt</code></td>
</tr>
<tr>
<td><code>mkdir</code></td>
<td>Create a new directory.</td>
<td>Make DIRectory.</td>
<td><code>mkdir my_folder</code></td>
</tr>
<tr>
<td><code>rm</code></td>
<td>Delete files or directories.</td>
<td>Remove Mess.</td>
<td><code>rm file.txt</code></td>
</tr>
<tr>
<td><code>cp</code></td>
<td>Copy files or directories.</td>
<td>Clone Pieces.</td>
<td><code>cp file1.txt backup.txt</code></td>
</tr>
<tr>
<td><code>mv</code></td>
<td>Move or rename files/directories.</td>
<td>Move Values.</td>
<td><code>mv oldname.txt newname.txt</code></td>
</tr>
<tr>
<td><code>man</code></td>
<td>Display the manual for a command.</td>
<td>MANual.</td>
<td><code>man ls</code></td>
</tr>
<tr>
<td><code>clear</code></td>
<td>Clear the terminal screen.</td>
<td>Start with a clear screen.</td>
<td><code>clear</code></td>
</tr>
<tr>
<td><code>whoami</code></td>
<td>Display the current user.</td>
<td>Who am I?</td>
<td><code>whoami</code></td>
</tr>
<tr>
<td><code>uname</code></td>
<td>Show system information.</td>
<td>Unique NAME.</td>
<td><code>uname -a</code></td>
</tr>
<tr>
<td><code>hostname</code></td>
<td>Display the system hostname.</td>
<td>The name of the host system.</td>
<td><code>hostname</code></td>
</tr>
</tbody></table>
<h2>File Management</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>nano</code></td>
<td>Open a simple text editor.</td>
<td>Nano: Small but mighty editor.</td>
<td><code>nano file.txt</code></td>
</tr>
<tr>
<td><code>vi</code></td>
<td>Open the vi text editor.</td>
<td>VIsual editor.</td>
<td><code>vi file.txt</code></td>
</tr>
<tr>
<td><code>less</code></td>
<td>View file contents page by page.</td>
<td>Read less at a time.</td>
<td><code>less bigfile.txt</code></td>
</tr>
<tr>
<td><code>head</code></td>
<td>Display the first few lines of a file.</td>
<td>The head of the file.</td>
<td><code>head file.txt</code></td>
</tr>
<tr>
<td><code>tail</code></td>
<td>Display the last few lines of a file.</td>
<td>The tail of the file.</td>
<td><code>tail file.txt</code></td>
</tr>
<tr>
<td><code>find</code></td>
<td>Search for files in a directory.</td>
<td>Find things.</td>
<td><code>find /home -name &quot;*.txt&quot;</code></td>
</tr>
<tr>
<td><code>locate</code></td>
<td>Quickly locate files by name.</td>
<td>Locate faster than find.</td>
<td><code>locate file.txt</code></td>
</tr>
<tr>
<td><code>stat</code></td>
<td>Display detailed info about a file.</td>
<td>Statistics of a file.</td>
<td><code>stat file.txt</code></td>
</tr>
<tr>
<td><code>file</code></td>
<td>Determine the file type.</td>
<td>What kind of file is it?</td>
<td><code>file image.png</code></td>
</tr>
</tbody></table>
<h2>User Management</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>id</code></td>
<td>Display user ID and group information.</td>
<td>IDentity.</td>
<td><code>id</code></td>
</tr>
<tr>
<td><code>who</code></td>
<td>List logged-in users.</td>
<td>Who is online?</td>
<td><code>who</code></td>
</tr>
<tr>
<td><code>groups</code></td>
<td>Show groups of the current user.</td>
<td>Groups you belong to.</td>
<td><code>groups</code></td>
</tr>
<tr>
<td><code>adduser</code></td>
<td>Add a new user to the system.</td>
<td>Add User.</td>
<td><code>sudo adduser newuser</code></td>
</tr>
<tr>
<td><code>passwd</code></td>
<td>Change user password.</td>
<td>Update passwd.</td>
<td><code>passwd</code></td>
</tr>
</tbody></table>
<h2>Disk and System Info</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>df</code></td>
<td>Show disk space usage.</td>
<td>Disk Free.</td>
<td><code>df -h</code></td>
</tr>
<tr>
<td><code>du</code></td>
<td>Show directory/file sizes.</td>
<td>Disk Usage.</td>
<td><code>du -sh folder</code></td>
</tr>
<tr>
<td><code>free</code></td>
<td>Display memory usage.</td>
<td>Show free RAM.</td>
<td><code>free -h</code></td>
</tr>
<tr>
<td><code>top</code></td>
<td>Monitor system processes.</td>
<td>Top running processes.</td>
<td><code>top</code></td>
</tr>
<tr>
<td><code>htop</code></td>
<td>Interactive process viewer.</td>
<td>Human-friendly top.</td>
<td><code>htop</code></td>
</tr>
</tbody></table>
<h2>Networking</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>ping</code></td>
<td>Check connectivity to a host.</td>
<td>Ping a server to &quot;ping-pong.&quot;</td>
<td><code>ping google.com</code></td>
</tr>
<tr>
<td><code>wget</code></td>
<td>Download files from the web.</td>
<td>Web GET.</td>
<td><code>wget http://example.com/file.zip</code></td>
</tr>
<tr>
<td><code>curl</code></td>
<td>Transfer data from/to a server.</td>
<td>Client URL.</td>
<td><code>curl http://example.com</code></td>
</tr>
<tr>
<td><code>ifconfig</code></td>
<td>View or configure network interfaces.</td>
<td>Interface Configuration.</td>
<td><code>ifconfig</code></td>
</tr>
<tr>
<td><code>netstat</code></td>
<td>Show network connections.</td>
<td>Network Statistics.</td>
<td><code>netstat -tuln</code></td>
</tr>
</tbody></table>
<h2>Permissions and Ownership</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Mnemonic</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td><code>chmod</code></td>
<td>Change file permissions.</td>
<td>CHange MODe.</td>
<td><code>chmod 755 file.sh</code></td>
</tr>
<tr>
<td><code>chown</code></td>
<td>Change file ownership.</td>
<td>CHange OWNer.</td>
<td><code>sudo chown user:group file.txt</code></td>
</tr>
<tr>
<td><code>umask</code></td>
<td>Set default permissions.</td>
<td>User MASK.</td>
<td><code>umask 022</code></td>
</tr>
</tbody></table>
<hr>
<h3>Powered by The AI Real Estate Investor</h3>
<p>Join our community of AI-powered entrepreneurs:</p>
<ul>
<li>🌐 <a href="https://www.theairealestateinvestor.com">Join Our AI Community</a></li>
<li>📱 <a href="https://www.facebook.com/aireinvestor">Follow Us on Facebook</a></li>
<li>💡 <a href="https://www.theairealestateinvestor.com/membership">Join AI Revolutionaries Club</a></li>
</ul>
<p><em>Tip: Look for easter eggs in the commands!</em></p>


