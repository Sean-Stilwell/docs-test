<template><div><h2 id="azure-databricks-for-cloud-analytics" tabindex="-1"><a class="header-anchor" href="#azure-databricks-for-cloud-analytics"><span>Azure Databricks for Cloud Analytics</span></a></h2>
<p>Databricks is a platform similar to Jupyter notebooks and enables scientists to create and share documents that include live code, equations, and other multimedia resources. Databricks integrates with cloud storage and security in your cloud account, and manages and deploys cloud infrastructure on your behalf.</p>
<h3 id="accessing-storage-through-databricks" tabindex="-1"><a class="header-anchor" href="#accessing-storage-through-databricks"><span>Accessing Storage through Databricks</span></a></h3>
<p>The DataHub provides an unified environment with storage and databricks and each workspace includes a storage account that can be accessed through Databricks using mount points.</p>
<h3 id="databricks-cluster-policies" tabindex="-1"><a class="header-anchor" href="#databricks-cluster-policies"><span>Databricks Cluster Policies</span></a></h3>
<p>The DataHub provides a few pre-defined cluster policies and a default all purpose cluster out of the box. Project lead users can create additional clusters using one of the policies. Regular project users can start and use these clusters.</p>
<table>
<thead>
<tr>
<th>Policy Name</th>
<th>Max DBU Per Hour</th>
<th>Node Type</th>
<th>Max Workers</th>
</tr>
</thead>
<tbody>
<tr>
<td>DataHub Small</td>
<td>4</td>
<td><ul><li>Standard_D4ds_v5</li></ul></td>
<td>2</td>
</tr>
<tr>
<td>DataHub Regular</td>
<td>12</td>
<td><u/><li>Standard_D4ds_v5 (Default)</li><li>Standard_D8ds_v5</li><li>Standard_D16ds_v5</li></ul></td>
<td>4</td>
</tr>
<tr>
<td>DataHub Large</td>
<td>64</td>
<td><ul><li>Standard_D4ds_v5</li><li>Standard_D8ds_v5 (Default)</li><li>Standard_D16ds_v5</li><li>Standard_D32ds_v5</li><li>Standard_D48ds_v5</li><li>Standard_D64ds_v5</li></ul></td>
<td>32</td>
</tr>
</tbody>
</table>
<h3 id="learn-more-about-databricks" tabindex="-1"><a class="header-anchor" href="#learn-more-about-databricks"><span>Learn more about Databricks</span></a></h3>
<p>See the following links for a list of resources for working with Databricks, Python, R and Spark:</p>
<ul>
<li><a href="Databricks/Databricks-and-Spark-SQL-tutorials">Learning the basics about Databricks and Spark</a></li>
<li><a href="https://docs.databricks.com/" target="_blank" rel="noopener noreferrer">Official Databricks Documentation</a></li>
<li><a href="https://docs.databricks.com/getting-started/index.html" target="_blank" rel="noopener noreferrer">Databricks Getting Started Guide</a></li>
<li><a href="https://databricks.com/product/faq/community-edition" target="_blank" rel="noopener noreferrer">Databricks Community Edition</a> - You can use this edition free of charge for learning purpose</li>
<li><a href="https://www.youtube.com/watch?v=n-yt_3HvkOI&amp;t=27s" target="_blank" rel="noopener noreferrer">Intro to Databricks (Demo)</a></li>
<li><a href="https://www.youtube.com/channel/UC3q8O3Bh2Le8Rj1-Q-_UUbA" target="_blank" rel="noopener noreferrer">Databricks Youtube Channel</a></li>
<li><a href="https://docs.databricks.com/spark/latest/spark-sql/index.html" target="_blank" rel="noopener noreferrer">Spark Sql</a> - although you may not be handling big data, the spark API might come in handy for data wrangling tasks</li>
<li><a href="https://spark.apache.org/docs/latest/sql-programming-guide.html" target="_blank" rel="noopener noreferrer">Spark SQL Guide</a></li>
<li><a href="https://www.kdnuggets.com/2018/10/apache-spark-introduction-beginners.html" target="_blank" rel="noopener noreferrer">Intro to Spark</a></li>
</ul>
</div></template>


