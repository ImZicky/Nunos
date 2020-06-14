FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Nunos/Nunos.csproj", "Nunos/"]
RUN dotnet restore "Nunos/Nunos.csproj"
COPY . .
WORKDIR "/src/Nunos"
RUN dotnet build "Nunos.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Nunos.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Nunos.dll"]