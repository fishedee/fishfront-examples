COMMON := ../../../fishfront/node_modules/fishfront/src
COMMON_OUT := node_modules/fishfront
COMMON_IN := `cd $(COMMON) && pwd`
copy_common:
	-rm -rf $(COMMON_OUT)
	mkdir $(COMMON_OUT)
	cd $(COMMON_OUT)
	for i in `cd $(COMMON) && find .`; do \
		if [ "$$i" != "." ];then \
			if [ -d $(COMMON_IN)/$$i ]; then \
				mkdir $(COMMON_OUT)/$$i;\
			else \
				ln $(COMMON_IN)/$$i $(COMMON_OUT)/$$i;\
			fi \
		fi \
	done