FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["accountsportal_backend/src/TexasAccountsPortal.Api/TexasAccountsPortal.Api.csproj", "accountsportal_backend/src/TexasAccountsPortal.Api/"]
COPY ["accountsportal_backend/src/TexasAccountsPortal.Application/TexasAccountsPortal.Application.csproj", "accountsportal_backend/src/TexasAccountsPortal.Application/"]
COPY ["accountsportal_backend/src/TexasAccountsPortal.Infrastructure/TexasAccountsPortal.Infrastructure.csproj", "accountsportal_backend/src/TexasAccountsPortal.Infrastructure/"]
COPY ["accountsportal_backend/src/TexasAccountsPortal.Domain/TexasAccountsPortal.Domain.csproj", "accountsportal_backend/src/TexasAccountsPortal.Domain/"]
COPY ["accountsportal_backend/src/TexasAccountsPortal.Contracts/TexasAccountsPortal.Contracts.csproj", "accountsportal_backend/src/TexasAccountsPortal.Contracts/"]

RUN dotnet restore "accountsportal_backend/src/TexasAccountsPortal.Api/TexasAccountsPortal.Api.csproj"

COPY . .

WORKDIR "/src/accountsportal_backend/src/TexasAccountsPortal.Api"
RUN dotnet publish "TexasAccountsPortal.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "TexasAccountsPortal.Api.dll"]
