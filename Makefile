
#
# Default.
#

default: run

#
# Tasks.
#

# Remove non-checked-in dependencies.
clean:
	@rm -rf node_modules

# Run the bot.
run: node_modules
	@DEBUG=* node --harmony lib/index

#
# Targets.
#

node_modules: package.json
	@npm install
	@touch node_modules

#
# Phonies.
#

.PHONY: clean