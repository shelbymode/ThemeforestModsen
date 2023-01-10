# Application logic

```typescript
	/usecases - `stores user scenario. Their existence is resulted from nessesity to automate processes. Shouldn't contain any business logic. Orchestate adapters.`
```

```typescript
	/ports - `stores interfaces for adapters. These interfaces express which way our application wants to interact with outside world. These adapters are stored in /services.`
```

```typescript
	/store - `contains live-data of the application and using usecases interacts with user (invoke these usecases and reflects result of their completion)`
```
