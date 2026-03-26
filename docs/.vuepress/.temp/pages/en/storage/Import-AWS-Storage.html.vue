<template><div><h1 id="importing-an-existing-aws-s3-bucket" tabindex="-1"><a class="header-anchor" href="#importing-an-existing-aws-s3-bucket"><span>Importing an Existing AWS S3 Bucket</span></a></h1>
<p>To import an AWS S3 bucket, you will need to create a user with the appropriate permissions on the bucket, and generate an access key for that user.</p>
<ol>
<li>
<p>Using the <strong>Services</strong> menu in the AWS console, navigate to <strong>Security, Identity &amp; Compliance</strong>, and <strong>IAM</strong> under that section.<br>
<img src="@source/en/storage/img/import_aws-01.png" alt="IAM in service menu"></p>
</li>
<li>
<p>In the <strong>Users</strong> section, create a new user.<br>
<img src="@source/en/storage/img/import_aws-02.png" alt="Users section">
<img src="@source/en/storage/img/import_aws-03.png" alt="Create user">
<img src="@source/en/storage/img/import_aws-04.png" alt="Assign user name"></p>
</li>
<li>
<p>In the <strong>Set permissions</strong> step of user creation, assign an appropriate policy to the user. <strong>AmazonS3FullAccess</strong> will give full rights to the user, but a more restrictive policy such as the example below may be more appropriate for your organization.<br>
<img src="@source/en/storage/img/import_aws-05.png" alt="Assign policy"></p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">{</span>
<span class="line">    "Version": "2012-10-17",</span>
<span class="line">    "Statement": [</span>
<span class="line">        {</span>
<span class="line">            "Effect": "Allow",</span>
<span class="line">            "Principal": "*",</span>
<span class="line">            "Action": [</span>
<span class="line">                "s3:GetObject",</span>
<span class="line">                "s3:PutObject",</span>
<span class="line">                "s3:DeleteObject",</span>
<span class="line">                "s3:ListBucket"</span>
<span class="line">            ],</span>
<span class="line">            "Resource": [</span>
<span class="line">                "arn:aws:s3:::&lt;your-bucket-name>/*",</span>
<span class="line">                "arn:aws:s3:::&lt;your-bucket-name>"</span>
<span class="line">            ]</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After reviewing the information, click <strong>Create user</strong> to complete this step.<br>
<img src="@source/en/storage/img/import_aws-06.png" alt="Review and create"></p>
<ol start="4">
<li>
<p>Once the user is created, find it in the Users list and click on the username. In  the <strong>Summary</strong> section, under <strong>Access key 1</strong>, click <strong>Create access key</strong><br>
<img src="@source/en/storage/img/import_aws-07.png" alt="Find user in list">
<img src="@source/en/storage/img/import_aws-08.png" alt="Create access key"></p>
</li>
<li>
<p>Select <strong>Other</strong> as the use case. Optionally, set a description for the key to easily identify it, and click <strong>Create access key</strong><br>
<img src="@source/en/storage/img/import_aws-09.png" alt="Access key use case">
<img src="@source/en/storage/img/import_aws-10.png" alt="Key description"></p>
</li>
<li>
<p>Once the key is created, make sure to copy the <strong>Access key</strong> and <strong>Secret access key</strong>. You will not be able to retrieve the secret key after exiting from this screen and will have to create a new one if you lose it.<br>
<img src="@source/en/storage/img/import_aws-11.png" alt="Access key"></p>
</li>
</ol>
<p>You can now enter this information, along with the bucket name and region, into the configuration dialog in Datahub.<br>
<img src="@source/en/storage/img/import_aws-12.png" alt="AWS configuration dialog"></p>
</div></template>


