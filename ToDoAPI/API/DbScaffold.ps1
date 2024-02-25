# Comando para PM console: .\API\DbScaffold.ps1
Scaffold-DbContext "Name=ToDoDB" Microsoft.EntityFrameworkCore.SqlServer -Context ToDoDB -ContextDir Data -OutputDir Data\Models -Force -NoPluralize