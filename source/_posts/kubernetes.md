---
title: Kubernetes
date: 2023-01-09 10:26:55
background: bg-[#416cde]
tags:
  - config
  - format
categories:
  - Programming
intro: |
  This page contains a list of commonly used kubectl commands and flags.
plugins:
  - copyCode
---

## Viewing and finding resources {.cols-2}

### Nodes

```bash
kubectl get no # Display all node information
kubectl get no -o wide # Show more information about all nodes
kubectl describe no # Display node details
kubectl get no -o yaml # Display node details in yaml format
kubectl get node --selector=[label_name] # Filter the node with the specified label
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type="ExternalIP")].address}'
# Output the field information defined by the jsonpath expression
kubectl top node [node_name] # Display node (CPU/memory/storage) usage
```

Resource name: nodes, abbreviation: no

### Pods

```bash
kubectl get po # Display all container group information
kubectl get po -o wide
kubectl describe po
kubectl get po --show-labels # View the labels of the container group
kubectl get po -l app=nginx
kubectl get po -o yaml
kubectl get pod [pod_name] -o yaml --export
kubectl get pod [pod_name] -o yaml --export > nameoffile.yaml
# Export container group information to yaml file in yaml format
kubectl get pods --field-selector status.phase=Running
# Use the field selector to filter out container group information
```

Resource name: pods, abbreviation: po

### Namespaces

```bash
kubectl get ns
kubectl get ns -o yaml
kubectl describe ns
```

Resource name: namespaces, abbreviation: ns

### Deployments

```bash
kubectl get deploy
kubectl describe deploy
kubectl get deploy -o wide
kubectl get deploy -o yaml
```

Resource name: deployments, abbreviation: deploy

### Services

```bash
kubectl get svc
kubectl describe svc
kubectl get svc -o wide
kubectl get svc -o yaml
kubectl get svc --show-labels
```

Resource name: services, abbreviation: svc

### Daemon Sets

```bash
kubectl get ds
kubectl describe ds --all-namespaces
kubectl describe ds [daemonset_name] -n [namespace_name]
kubectl get ds [ds_name] -n [ns_name] -o yaml
```

Resource name: daemonsets, abbreviation: ds

### Events

```bash
kubectl get events
kubectl get events -n kube-system
kubectl get events -w
```

Resource name: events, abbreviation: ev

### Logs

```bash
kubectl logs [pod_name]
kubectl logs --since=1h [pod_name]
kubectl logs --tail=20 [pod_name]
kubectl logs -f -c [container_name] [pod_name]
kubectl logs [pod_name] > pod.log
```

### Service Accounts

```bash
kubectl get sa
kubectl get sa -o yaml
kubectl get serviceaccounts default -o yaml >./sa.yaml
kubectl replace serviceaccount default -f ./sa.yaml
```

Resource name: serviceaccounts, abbreviation: ev

### Replica Sets

```bash
kubectl get rs
kubectl describe rs
kubectl get rs -o wide
kubectl get rs -o yaml
```

Resource name: replicasets, abbreviation: rs

### Roles

```bash
kubectl get roles --all-namespaces
kubectl get roles --all-namespaces -o yaml
```

### Secrets

```bash
kubectl get secrets
kubectl get secrets --all-namespaces
kubectl get secrets -o yaml
```

### Config maps

Resource name: configmaps, abbreviation: cm

```bash
kubectl get cm
kubectl get cm --all-namespaces
kubectl get cm --all-namespaces -o yaml
```

### Ingresses

Resource name: ingresses, abbreviation: ing

```bash
kubectl get ing
kubectl get ing --all-namespaces
```

### Persistent Volumes

Resource name: persistentvolumes, abbreviation: pv

```bash
kubectl get pv
kubectl describe pv
```

### Persistent volume declaration

Resource name: persistentvolumeclaims, abbreviation: pvc

```bash
kubectl get pvc
kubectl describe pvc
```

### storage class

Resource name: storageclasses, Abbreviation: sc

```bash
kubectl get sc
kubectl get sc -o yaml
```

### Multiple resources

```bash
kubectl get svc, po
kubectl get deploy, no
kubectl get all
kubectl get all --all-namespaces
```

## Updating resources

### Taint

```bash
kubectl taint [node_name] [taint_name]
```

### Label

```bash
kubectl label [node_name] disktype=ssd
kubectl label [pod_name] env=prod
```

### Maintain/Schedulable

```bash
kubectl cordon [node_name] # node maintenance
kubectl uncordon [node_name] # node is schedulable
```

### clear

```bash
kubectl drain [node_name] # empty the node
```

### Node/Pod {.row-span-2}

```bash
kubectl delete node [node_name]
kubectl delete pod [pod_name]
kubectl edit node [node_name]
kubectl edit pod [pod_name]
```

### Stateless/Namespaced {.row-span-2}

```bash
kubectl edit deploy [deploy_name]
kubectl delete deploy [deploy_name]
kubectl expose deploy [deploy_name] --port=80 --type=NodePort
kubectl scale deploy [deploy_name] --replicas=5
kubectl delete ns
kubectl edit ns [ns_name]
```

### Service

```bash
kubectl edit svc [svc_name]
kubectl delete svc [svc_name]
```

### Daemon set

```bash
kubectl edit ds [ds_name] -n kube-system
kubectl delete ds [ds_name]
```

### Service account

```bash
kubectl edit sa [sa_name]
kubectl delete sa [sa_name]
```

### Notes

```bash
kubectl annotate po [pod_name] [annotation]
kubectl annotateno [node_name]
```

## Create resources

### Create pod

```bash
kubectl create -f [name_of_file]
kubectl apply -f [name_of_file]
kubectl run [pod_name] --image=nginx --restart=Never
kubectl run [pod_name] --generator=run-pod/v1 --image=nginx
kubectl run [pod_name] --image=nginx --restart=Never
```

### Create Service

```bash
kubectl create svc nodeport [svc_name] --tcp=8080:80
```

### Create a stateless application

```bash
kubectl create -f [name_of_file]
kubectl apply -f [name_of_file]
kubectl create deploy [deploy_name] --image=nginx
```

### interaction

```bash
kubectl run [pod_name] --image=busybox --rm -it --restart=Never --sh
```

### Output YAML

```bash
kubectl create deploy [deploy_name] --image=nginx --dry-run -o yaml > deploy.yaml
kubectl get po [pod_name] -o yaml --export > pod.yaml
```

### Help

```bash
kubectl -h
kubectl create -h
kubectl run -h
kubectl explain deploy.spec
```

## Miscellaneous

### APIs

```bash
kubectl get --raw /apis/metrics.k8s.io/
```

### Information

```bash
kubectl config
kubectl cluster-info
kubectl get componentstatus
```

## Also See

- [Kubernetes Official Documentation](https://kubernetes.io/zh-cn/docs/reference/kubectl/) _(kubernetes.io)_
