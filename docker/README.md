## Docker

###     一、架构
#### 1.镜像 (Images)   
> Docker 镜像是用于创建 Docker 容器的模板。  
>Docker 把应用程序及其依赖，打包在 image 文件里面。只有通过这个文件，才能生成 Docker 容器。

    操作系统分为内核和用户空间，Docker镜像就相当于是一个root 文件系统，是一个特殊的文件系统，提供容器运行时的程序，库，资源，配置等文件，镜像不包括任何动态数据，内容在构建后也不会被改变。   

2.容器 (Container)  
> 容器是独立运行的一个或一组应用。    

3.仓库 (Registry)
> Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。      
> [Docker Hub](https://hub.docker.com) 提供了庞大的镜像集合供使用。

### 二、Docker 安装
#### 1.使用 Homebrew 安装
```
 $ brew cask install docker

    ==> Creating Caskroom at /usr/local/Caskroom
    ==> We'll set permissions properly so we won't need sudo in the future
    Password:          # 输入 macOS 密码
    ==> Satisfying dependencies
    ==> Downloading https://download.docker.com/mac/stable/21090/Docker.dmg
    ######################################################################## 100.0%
    ==> Verifying checksum for Cask docker
    ==> Installing Cask docker
    ==> Moving App 'Docker.app' to '/Applications/Docker.app'.
    &#x1f37a;  docker was successfully installed!
```
#### 2.手动下载安装
点击以下链接下载 [Stable](https://download.docker.com/mac/stable/Docker.dmg) 或 [Edge](https://download.docker.com/mac/edge/Docker.dmg) 版本的 Docker for Mac。

打开图标，启动。    
打开终端，输入
```
$ docker --version

 Version:	18.03.0-ce
 API version:	1.37
 Go version:	go1.9.4
 Git commit:	0520e24
 Built:	Wed Mar 21 23:06:22 2018
 OS/Arch:	darwin/amd64
 Experimental:	false
 Orchestrator:	swarm

Server:
 Engine:
  Version:	18.03.0-ce
  API version:	1.37 (minimum version 1.12)
  Go version:	go1.9.4
  Git commit:	0520e24
  Built:	Wed Mar 21 23:14:32 2018
  OS/Arch:	linux/amd64
  Experimental:	true
```

#### 3.镜像加速
国内网络问题，后续拉取 Docker 镜像十分缓慢，需要配置加速器来解决
网易的镜像地址：http://hub-mirror.c.163.com。  

在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。 

终端输入
```
$ docker info

...
Registry Mirrors:
 http://hub-mirror.c.163.com
Live Restore Enabled: false
```
加速完成。

### 三、  Docker run
    
#### 1.Docker Hello World
```
$ docker run ubuntu:15.10 /bin/echo "Hello world"

Unable to find image 'ubuntu:15.10' locally
15.10: Pulling from library/ubuntu
7dcf5a444392: Pull complete 
759aa75f3cee: Pull complete 
3fa871dc8a2b: Pull complete 
224c42ae46e7: Pull complete 
Digest: sha256:02521a2d079595241c6793b2044f02eecf294034f31d6e235ac4b2b54ffc41f3
Status: Downloaded newer image for ubuntu:15.10
Hello world
```
- docker run -----> 运行一个容器    
- ubuntu:15.10 ---->  指定要运行的镜像,首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。    
- /bin/echo "Hello world" ----> 在启动的容器里执行的命令

>Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。







***
***
***
***
***
***
***
***   
***

## docker 相关操作
### 容器相关操作
docker create # 创建一个容器但是不启动它     
docker run # 创建并启动一个容器      
docker stop # 停止容器运行，发送信号SIGTERM      
docker start # 启动一个停止状态的容器       
docker restart # 重启一个容器       
docker rm # 删除一个容器       
docker kill # 发送信号给容器，默认SIGKILL       
docker attach # 连接(进入)到一个正在运行的容器       
docker wait # 阻塞到一个容器，直到容器停止运行
 

### 获取容器相关信息
docker ps # 显示状态为运行（Up）的容器       
docker ps -a # 显示所有容器,包括运行中（Up）的和退出的(Exited)       
docker inspect # 深入容器内部获取容器所有信息       
docker logs # 查看容器的日志(stdout/stderr)       
docker events # 得到docker服务器的实时的事件       
docker port # 显示容器的端口映射       
docker top # 显示容器的进程信息       
docker diff # 显示容器文件系统的前后变化       
 
### 导出容器
docker cp # 从容器里向外拷贝文件或目录       
docker export # 将容器整个文件系统导出为一个tar包，不带layers、tag等信息       
 
### 执行
docker exec # 在容器里执行一个命令，可以执行bash进入交互式       
 
### 镜像操作
docker images # 显示本地所有的镜像列表       
docker import # 从一个tar包创建一个镜像，往往和export结合使用       
docker build # 使用Dockerfile创建镜像（推荐）       
docker commit # 从容器创建镜像       
docker rmi # 删除一个镜像       
docker load # 从一个tar包创建一个镜像，和save配合使用       
docker save # 将一个镜像保存为一个tar包，带layers和tag信息       
docker history # 显示生成一个镜像的历史命令       
docker tag # 为镜像起一个别名       
 
### 镜像仓库(registry)操作
docker login # 登录到一个registry       
docker search # 从registry仓库搜索镜像       
docker pull # 从仓库下载镜像到本地       
docker push # 将一个镜像push到registry仓库中       
 
### 获取Container IP地址（Container状态必须是Up）
docker inspect id | grep IPAddress | cut -d '"' -f 4
 
### 获取端口映射
docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}} {{$p}} -> {{(index $conf 0).HostPort}} {{end}}' id
 
### 获取环境变量
docker exec container_id env
 
### 杀掉所有正在运行的容器
docker kill $(docker ps -q)
 
### 删除老的(一周前创建)容器
docker ps -a | grep 'weeks ago' | awk '{print $1}' | xargs docker rm
 
### 删除已经停止的容器
docker rm `docker ps -a -q`
 
###删除所有镜像，小心
docker rmi $(docker images -q)
 
### Dockerfile
Dockerfile是docker构建镜像的基础，也是docker区别于其他容器的重要特征，正是有了Dockerfile，docker的自动化和可移植性才成为可能。

不论是开发还是运维，学会编写Dockerfile几乎是必备的，这有助于你理解整个容器的运行。

 
### FROM , 从一个基础镜像构建新的镜像
FROM ubuntu
 
### MAINTAINER , 维护者信息
MAINTAINER William 
 
### ENV , 设置环境变量
ENV TEST 1
 
### RUN , 非交互式运行shell命令
RUN apt-get -y update 
RUN apt-get -y install nginx
 
### ADD , 将外部文件拷贝到镜像里,src可以为url
ADD http://nicescale.com/  /data/nicescale.tgz
 
### WORKDIR /path/to/workdir, 设置工作目录
WORKDIR /var/www
 
### USER , 设置用户ID
USER nginx
 
### VULUME <#dir>, 设置volume
VOLUME [‘/data’]
 
### EXPOSE , 暴露哪些端口
EXPOSE 80 443
 
### ENTRYPOINT [‘executable’, ‘param1’,’param2’]执行命令
ENTRYPOINT ["/usr/sbin/nginx"]
 
CMD [“param1”,”param2”]
CMD ["start"]
docker创建、启动container时执行的命令，如果设置了ENTRYPOINT，则CMD将作为参数

 
### Dockerfile最佳实践
尽量将一些常用不变的指令放到前面
CMD和ENTRYPOINT尽量使用json数组方式
 
### 通过Dockerfile构建image
docker build csphere/nginx:1.7 .
 
### 镜像仓库Registry
镜像从Dockerfile build生成后，需要将镜像推送(push)到镜像仓库。企业内部都需要构建一个私有docker registry，这个registry可以看作二进制的scm，CI/CD也需要围绕registry进行。

 
### 部署registry
mkdir /registry
docker run  -p 80:5000  -e STORAGE_PATH=/registry  -v /registry:/registry  registry:2.0
 
### 推送镜像保存到仓库
假设192.168.1.2是registry仓库的地址：

docker tag  csphere/nginx:1.7 192.168.1.2/csphere/nginx:1.7
docker push 192.168.1.2/csphere/nginx:1.7
 
### 几个简单小例子
容器操作
1.创建并拉取busybox
 docker pull busybox:latest     

2.创建测试容器

docker run -d --name con03 csphere/test:0.1       
efc9bda4a2ff2f479b18e0fc4698e42c47c9583a24c93f5ce6b28a828a172709      

3.登陆到con03中     

\# docker exec -it con03 /bin/bash       
[root@efc9bda4a2ff /]# exit     

4.停止con03

\# docker stop con03
con03     

5.开启con03

\# docker start con03
con03



