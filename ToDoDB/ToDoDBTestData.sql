USE ToDoDB
GO

-- INSERT TASKS

IF NOT EXISTS (SELECT * FROM Task WHERE Id = '1')
BEGIN
	INSERT INTO Task (Description, DueDate, StateId) VALUES ('DEV - Finished DB for Ecommerce App', '2024-02-24 19:00:00', 2)
END

IF NOT EXISTS (SELECT * FROM Task WHERE Id = '2')
BEGIN
	INSERT INTO Task (Description, DueDate, StateId) VALUES ('DEV - Styles for Ecommerce App', '2024-02-28 20:00:00', 1)
END

IF NOT EXISTS (SELECT * FROM Task WHERE Id = '3')
BEGIN
	INSERT INTO Task (Description, DueDate, StateId) VALUES ('DEV - API for Ecommerce App', '2024-03-10 18:00:00', 1)
END

IF NOT EXISTS (SELECT * FROM Task WHERE Id = '4')
BEGIN
	INSERT INTO Task (Description, DueDate, StateId) VALUES ('HOME - Buy cleaning stuff', '2024-02-27 20:00:00', 1)
END